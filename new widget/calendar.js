document.addEventListener('DOMContentLoaded', function(){
    setCells('clndr1');
    // toggleFullScreen();
    var id = 'clndr1';
    var PrevMonth = document.getElementById(id).getElementsByClassName("calendar-monthLeft")[0];
    PrevMonth.addEventListener('click', function () {
        var date = (document.getElementById(id).getElementsByClassName("showingDate")[0].value) ?
            document.getElementById(id).getElementsByClassName("showingDate")[0].value :
            document.getElementById(id).getElementsByClassName("checkedDate")[0].value;
        tgL();
        setCells(id,moment(date).subtract(1, 'month'));

    });

    var NextMonth = document.getElementById(id).getElementsByClassName("calendar-monthRight")[0];
    NextMonth.addEventListener('click', function () {
        var date = (document.getElementById(id).getElementsByClassName("showingDate")[0].value) ?
            document.getElementById(id).getElementsByClassName("showingDate")[0].value :
            document.getElementById(id).getElementsByClassName("checkedDate")[0].value;
        tgR();
        setCells(id,moment(date).add(1, 'month'));
    });

    disableDays(id);
});

var months = []

var daysCell = ['clnd_1-1','clnd_1-2','clnd_1-3','clnd_1-4','clnd_1-5','clnd_1-6','clnd_1-7',
    'clnd_2-1','clnd_2-2','clnd_2-3','clnd_2-4','clnd_2-5','clnd_2-6','clnd_2-7',
    'clnd_3-1','clnd_3-2','clnd_3-3','clnd_3-4','clnd_3-5','clnd_3-6','clnd_3-7',
    'clnd_4-1','clnd_4-2','clnd_4-3','clnd_4-4','clnd_4-5','clnd_4-6','clnd_4-7',
    'clnd_5-1','clnd_5-2','clnd_5-3','clnd_5-4','clnd_5-5','clnd_5-6','clnd_5-7',
    'clnd_6-1','clnd_6-2','clnd_6-3','clnd_6-4','clnd_6-5','clnd_6-6','clnd_6-7'];
var firstDay = moment().startOf('month');
var daysInMonth = firstDay.daysInMonth();
function clearCells() {
    for (var i = 0; i < daysCell.length; i++) {
        document.getElementsByClassName(daysCell[i])[0].innerHTML = '<span>'+0+'</span>';

    };
}
function setCells(id, date) {
    var day = (date) ? date : moment();
    var numDay = day.format('D');
    document.getElementById(id).getElementsByClassName('checkedDate')[0].value = ''+day.format("YYYY-MM-DD");
    document.getElementById(id).getElementsByClassName('calendar-monthLabel')[0].innerHTML = day.locale('ru').format('MMMM')+" "+day.format('YYYY');
    var isoFD = day.startOf('month').isoWeekday() - 2;
    var dim = day.daysInMonth();
    for (var i = 1; i < dim+1; i++) {

        document.getElementById(id).getElementsByClassName(daysCell[isoFD+i])[0].innerHTML = '<span class="CrMD">'+i+'</span>';
    }

    for (var i = 1; i < daysCell.length-dim-isoFD; i++) {
        document.getElementById(id).getElementsByClassName(daysCell[isoFD+dim+i])[0].innerHTML = '<span class="NxMD">'+i+'</span>';
    }
    var prevMonLen = day.subtract(1,'months').daysInMonth();
    for (var i = 0; i < isoFD+1; i++) {
        var d = prevMonLen - isoFD + i;
        document.getElementById(id).getElementsByClassName(daysCell[i])[0].innerHTML = '<span class="PrMD">'+d+'</span>';
    }
    setListeners(id);
    // pickDate(id, numDay);
}
function setListeners(id){
    var CurDays = document.getElementById(id).getElementsByClassName("CrMD");
    for (var i = 0; i < CurDays.length; i++) {
        CurDays[i].addEventListener( "click" , function() {
            var old = document.getElementById(id).getElementsByClassName("chekedDay");
            if(old[0]) {old[0].classList.toggle("chekedDay");}
            this.classList.toggle("chekedDay");

            var defDate = moment(document.getElementById(id).getElementsByClassName('checkedDate')[0].value).startOf('month');
            defDate.add(this.innerHTML-1, 'day')

            document.getElementById(id).getElementsByClassName('checkedDate')[0].value = defDate.format('YYYY-MM-DD');


        });
    }

    var PrevDays = document.getElementById(id).getElementsByClassName("PrMD");
    for (var i = 0; i < PrevDays.length; i++) {
        PrevDays[i].addEventListener( "click" , function() {
            var defDate = moment(document.getElementById(id).getElementsByClassName('checkedDate')[0].value).startOf('month');
            tgL();
            setCells(id,defDate.subtract(1, 'month').add(parseInt( this.innerHTML)-1, 'day'));
        });
    }

    var NextDays = document.getElementById(id).getElementsByClassName("NxMD");
    for (var i = 0; i < NextDays.length; i++) {
        NextDays[i].addEventListener( "click" , function() {
            var defDate = moment(document.getElementById(id).getElementsByClassName('checkedDate')[0].value).startOf('month');
            tgR();
            setCells(id,defDate.add(1, 'month').add(parseInt( this.innerHTML)-1, 'day'));
        });
    }


}

function disableDays(id) {
    var today = moment().format('D');
    var days = document.getElementById(id).getElementsByClassName('CrMD');
    console.log(days);
    for (var i = 0; i < days.length; i++) {
        if ( parseInt(days[i].innerHTML) < parseInt(today)){
            days[i].classList.add("archive");

        }
        if ( parseInt(days[i].innerHTML) === parseInt(today)){
            days[i].classList.add("gyg");
        }
    }


}

function pickDate(id, num) {
    var curDates = document.getElementById(id).getElementsByClassName('CrMD');
    for (var i = 0; i < curDates.length; i++) {
        if (curDates[i].innerHTML === num+'' ){
            curDates[i].classList.toggle("chekedDay");
        }
    }
    getDate(id)
}

function getDate(id) {
    return document.getElementById(id).getElementsByClassName('checkedDate')[0].value;
}


function tgEndL() {
    var el = document.getElementById('ji');
    el.classList.toggle("fadeinleft");
    el.classList.toggle("animated");
    document.getElementById('clone').remove();
}
function tgL() {
    clone('clone');
    var el = document.getElementById('ji');
    el.classList.toggle("fadeinleft");
    el.classList.toggle("animated");
    setTimeout(tgEndL, 500);
}
function tgEndR() {
    var el = document.getElementById('ji');
    el.classList.toggle("fadeinright");
    el.classList.toggle("animated");
    document.getElementById('clone').remove();
}
function tgR() {
    clone('clone');
    var el = document.getElementById('ji');
    el.classList.toggle("fadeinright");
    el.classList.toggle("animated");
    setTimeout(tgEndR, 350);
}

function clone(id) {
    var el = document.getElementById('ji');
    var par = document.getElementById('jj');
    var clone = el.cloneNode(true);
    clone.className += " clone animated fadeout";
    clone.removeAttribute("id");
    clone.setAttribute('id', id);
    par.appendChild(clone);
}



var a  = moment().startOf('month');
var b = moment().startOf('month').add(1, 'months');
var c = moment().startOf('month').add(2, 'months');