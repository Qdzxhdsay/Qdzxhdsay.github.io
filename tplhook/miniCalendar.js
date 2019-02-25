class miniCalendar {

	constructor (obj = document.querySelector('.mini-calendar'), 
				lang = 'ru',
				fDay = 1,
				month = moment().month() + 1,
				year = moment().year()) {

		var constructor = this;

		Object.defineProperties(constructor, {
			obj: {
				value: obj,
				writable: true,
				configurable: true,
				enumerable: true
			},
			date: {
				value: new Date(),
				writable: false,
				configurable: false,
				enumerable: true
			},
			selectedDay: {
				value: new Date(0, 0, 0),
				writable: true,
				configurable: false,
				enumerable: true
			},
			selectedWeek: {
				value: [
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0)],
				writable: true,
				configurable: false,
				enumerable: true
			},
			lifeChange: {
				value: false,
				writable: true,
				configurable: false,
				enumerable: true
			},
			orderDays: {
				value: [0, 1, 2, 3, 4, 5, 6],
				writable: true,
				configurable: false,
				enumerable: true
			},
			lang: {
				configurable: false,
				enumerable: true,
				get: function () {
					console.info(`Язык интерфейса: %s`, lang);
					return lang; 
				},
				set: function (val) {
					if (moment.locales().indexOf(val) != -1) {
						lang = val;
						moment.locale(lang);
						if (this.lifeChange) {
							var langMonth = moment.months(this.month - 1);
							this.obj.getElementsByClassName('month-mini-calendar')[0].innerHTML = this.initialLetter(langMonth);
							this.displayWeekDays();
							console.info(`Язык интерфейса изменен на: %s`, lang);
						}
					}
					else {
						console.warn('Извините, такой язык не поддерживается: %s', val);
					}
				}
			},
			fDay: {
				configurable: false,
				enumerable: true,
				get: function () {
					return fDay;
				},
				set: function (val) {
					if (this.orderDays.indexOf(val) != -1) {
						fDay = val;
						for (var i = 0; i < this.orderDays.length; i++) {
							if (fDay + i > 6) this.orderDays[i] = fDay + i - 7;
							else this.orderDays[i] = fDay + i;
						}
						if (this.lifeChange) {
							this.displayWeekDays();
							this.displayDays();
							console.info(`Начальный день изменен на: %d`, fDay);
						}
					}
					else {
						console.warn('Извините, такой начальный день невозможен: %s', val);
					}
				}
			},
			month: {
				configurable: false,
				enumerable: true,
				get: function () {
					return month;
				},
				set: function (val) {
					if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(val) != -1) {
						month = val;
						if (this.lifeChange)
							this.obj.getElementsByClassName('month-mini-calendar')[0].innerHTML = this.initialLetter(moment.months(val - 1));
					}
					else {
						console.warn('Извините, такой месяц невозможен: %s', val);
					}
				}
			},
			year: {
				configurable: false,
				enumerable: true,
				get: function () {
					return year;
				},
				set: function (val) {
					if (typeof val == 'number') {
						year = val;
						if (this.lifeChange)
							this.obj.getElementsByClassName('year-mini-calendar')[0].innerHTML = val;
					}
					else {
						console.warn('Извините, такой год невозможен: %s', val);
					}
				}
			}
		});
		constructor.lang = lang;
		constructor.fDay = fDay;
		constructor.month = month;
		constructor.year = year;

		constructor.create(constructor.obj);
		constructor.displayWeekDays();
		constructor.displayDays();

		constructor.obj.querySelectorAll('.clickable').forEach(function (item, i, items) {
			item.addEventListener('click', elementClick);
		});

		constructor.lifeChange = true;

		function selectDay (elem) {
			if (elem.classList.contains('prev-month'))
				if (constructor.month == 1)
					return new Date(constructor.year - 1, 11, Number(elem.innerHTML));
				else
					return new Date(constructor.year, constructor.month - 2, Number(elem.innerHTML));
			else
				if (elem.classList.contains('next-month'))
					if (constructor.month == 12)
						return new Date(constructor.year + 1, 0, Number(elem.innerHTML));
					else
						return new Date(constructor.year, constructor.month, Number(elem.innerHTML));
				else 
					return new Date(constructor.year, constructor.month - 1, Number(elem.innerHTML));
		}
		function elementClick () {
			if (this.classList.contains('day-mini-calendar')) {
				var exist = constructor.obj.querySelector('.select-day');
				if (exist !== null)
					exist.classList.remove('select-day');

				constructor.selectedDay = selectDay(this);
				this.classList.add('select-day');
				constructor.obj.dispatchEvent(new Event("selectWeekDay"));

				var cansel = constructor.obj.querySelector('.clear-selected-week');
				if (cansel.style.display !== 'none')
					cansel.dispatchEvent(new Event('click'));
			}
			
			if (this.classList.contains('left-arrow-mini-calendar') || this.classList.contains('prev-month')) {
				if (constructor.month === 1){
					constructor.year--;
					constructor.month = 12;
				}
				else
					constructor.month--;
				constructor.displayDays();
			}

			if (this.classList.contains('right-arrow-mini-calendar') || this.classList.contains('next-month')) {
				if (constructor.month === 12){
					constructor.year++;
					constructor.month = 1;
				}
				else
					constructor.month++;
				constructor.displayDays();
			}

			if (this.tagName === 'LABEL') {
				constructor.obj.querySelector('.clear-selected-week').style = 'display: block;';
				var selected = constructor.obj.querySelector('.select-day');
				if (selected) {
					selected.classList.remove('select-day');
					constructor.selectedDay = new Date(0, 0, 0);
				}
				var row = this.attributes.for.value.split('-');
				row = row[row.length - 1];
				constructor.obj.querySelector(`.row-${row}`).querySelectorAll('.day-mini-calendar').forEach(function (item, i) {
					constructor.selectedWeek[i] = selectDay(item);
				});
				constructor.obj.dispatchEvent(new Event("selectWeek"));
			}

			if (this.tagName === 'I') {
				constructor.obj.querySelectorAll('input').forEach(function (item) {
					if (item.checked)
						item.checked = false;
				});
				this.style = 'display: none;';
				constructor.selectedWeek = [
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0), 
					new Date(0, 0, 0)
				];
			}
		}
	}

	initialLetter (str) {
		return str[0].toUpperCase() + str.substring(1);
	}

	displayWeekDays () {
		var langDays = this.obj.getElementsByClassName('field-name-mini-calendar');
		var tmpWeekDays = moment.weekdaysShort();
		for (var i = 1; i < langDays.length; i++)
			langDays[i].innerHTML = this.initialLetter(tmpWeekDays[this.orderDays[i - 1]]);
	}

	displayDays () {

		function formMonth(m){
			if ([10, 11, 12].indexOf(m) != -1) return String(m);
			else return '0' + m;
		}

		var firstWeekDayInMonth = moment(moment(`${this.year}-${formMonth(this.month)}-01`).format('YYYY-MM-DD'), 'YYYY-MM-DD').day();
		var offset = firstWeekDayInMonth - this.fDay;
		if (offset < 0) offset = 7 + offset;
		var arrMonth = [];
		var arrDays = [];
		var arrPlaces = this.obj.getElementsByClassName('day-mini-calendar');
		var begin = 0;
		var end = 1;

		for (var i = -1; i < 1; i++) {
			if (this.month == 1)
				arrMonth.push(moment(moment(`${this.year + i}-${formMonth(this.month + -11 * i)}`).format('YYYY-MM'), 'YYYY-MM').daysInMonth());
			else
				arrMonth.push(moment(moment(`${this.year}-${formMonth(this.month + i)}`).format('YYYY-MM'), 'YYYY-MM').daysInMonth());
		}


		for (var i = 1; i < 43; i++) {
			if (offset > 0) {
				arrDays.push({class: 'prev-month', date: arrMonth[0] - offset + 1});
				if (offset == 1)
					begin = i;	
				offset--;
			}
			else {
				if (i < arrMonth[1] + begin + 1) {
					var d = i - begin;
					switch (d) {
						case this.date.getDate():
							if ((this.year == this.date.getFullYear())
							&& (this.month == this.date.getMonth() + 1))
								if ((this.year == this.selectedDay.getFullYear())
								&& (this.month - 1 == this.selectedDay.getMonth())
								&& (d == this.selectedDay.getDate()))
									arrDays.push({class: 'today select-day', date: d});
								else
									arrDays.push({class: 'today', date: d});
							else
								if ((this.year == this.selectedDay.getFullYear())
								&& (this.month - 1 == this.selectedDay.getMonth())
								&& (d == this.selectedDay.getDate()))
									arrDays.push({class: 'select-day', date: d});
								else
									arrDays.push({date: d});
							break;
						case this.selectedDay.getDate():
							if ((this.year == this.selectedDay.getFullYear())
							&& (this.month - 1 == this.selectedDay.getMonth()))
								arrDays.push({class: 'select-day', date: d});
							else
								arrDays.push({date: d});
							break;
						default:
							arrDays.push({date: d});
							break;
					}

				}
				else {
					arrDays.push({class: 'next-month', date: end});
					end++;
				}
			}
		}

		for (var i = 0; i < arrPlaces.length; i++) {
			arrPlaces[i].innerHTML = arrDays[i]['date'];
			arrPlaces[i].classList.remove('prev-month', 'next-month', 'today', 'select-day');
			if (arrDays[i]['class'] !== undefined) {
				var classList = arrDays[i]['class'].split(' ');
				for (var j = 0; j < classList.length; j++)
					arrPlaces[i].classList.add(classList[j]);
			}
				
		}
	}

	create (block) {
		var html = `<div class="main-block-mini-calendar">`;
		for (var rows = 0; rows < 8; rows++) {
			html += `<div class="row-mini-calendar row-${rows}">`;
			switch (rows) {
				case 0:
					html += `
					<div class="head-mini-calendar">
						<div class="left-arrow-mini-calendar clickable">
							<svg 
								version="1.1" 
								xmlns="http://www.w3.org/2000/svg" 
								xmlns:xlink="http://www.w3.org/1999/xlink" 
								viewBox="0 0 17 17">
									<g></g>
									<path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z">
									</path>
							</svg>
						</div>
						<div class="date-mini-calendar">
							<div class="month-mini-calendar">${this.initialLetter(moment.months(moment().month()))}</div>
							<div class="year-mini-calendar">${moment().year()}</div>
						</div>
						<div class="right-arrow-mini-calendar clickable">
							<svg 
								version="1.1" 
								xmlns="http://www.w3.org/2000/svg" 
								xmlns:xlink="http://www.w3.org/1999/xlink" 
								viewBox="0 0 17 17">
									<g></g>
									<path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z">
									</path>
							</svg>
						</div>
					</div>`;
					break;

				case 1:
					html += `<div class="title-mini-calendar">
								<div class="table-days-mini-calendar">
									<div class="field-name-mini-calendar column-0">
										<i class="fa fa-close clear-selected-week clickable"></i>
									</div>
								</div>`;
					for (var i = 1; i < 8; i++)
						html = html + `
							<div class="table-days-mini-calendar">
								<div class="field-name-mini-calendar column-${i}"></div>
							</div>`;
					html += `</div>`;
					break;

				default:
					html += `<div class="main-mini-calendar">`;
					for (var j = 0; j < 8; j++) {
						if (j == 0)
							html = html + `
								<div class="table-days-mini-calendar column-${j}">
									<div class="field-mini-calendar">
										<input type="radio" name="detailed" id="check-det-${rows}"/>
										<label for="check-det-${rows}" class="clickable">
										</label>
									</div>
								</div>`;
						else
							html = html + `
								<div class="table-days-mini-calendar column-${j}">
									<div class="day-mini-calendar clickable"></div>
								</div>`;
					}
					html += `</div>`;
					break;
			}
			html += `</div>`;
		}
		block.innerHTML += html + `</div>`;
	}

}