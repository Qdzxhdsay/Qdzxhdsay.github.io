document.querySelectorAll('.hipster-widget__card-item').forEach((el) => {
    let date = undefined,
        block = document.querySelector('.selected-master');
    function quickVisit (target) {
        if (date) {
            block.style.display = 'flex';
            block.querySelector('.selected-master__name').innerHTML = el.querySelector('.rect-card__name').innerHTML;
            block.querySelector('.selected-master__avatar').src = el.querySelector('.rect-card__avatar').src;

            block.querySelector('.selected-master__spec').style.display = 'none';
            block.querySelector('.selected-master__quick-write').style.display = 'flex';
            block.querySelector('.selected-master__datetext').innerHTML = date;

            if (target.classList.contains('rect-card__quickwrite-date'))
                block.querySelector('.selected-master__time').innerHTML = target.firstElementChild.innerHTML;
            else
                block.querySelector('.selected-master__time').innerHTML = target.innerHTML;

            document.querySelector('.select-buttons').style.display = 'none';
            date = undefined;
            let n = 2;
            document.querySelectorAll('.rect-card__quickwrite-date span').forEach((el) => {
                el.innerHTML = `${n}:${n/2}`;
                if (n === 24)
                    n = 2;
                else
                    n+=2;
            });
        }
        else {
            if (target.classList.contains('rect-card__quickwrite-date'))
                date = target.firstElementChild.innerHTML;
            else
                date = target.innerHTML;

            document.querySelector('.search-bar__navbtn.quick_change').dispatchEvent(new Event('click'));
            let rd = new Date(2019, date.split('.')[1], date.split('.')[0]),
                n = 0;
            document.querySelectorAll('.quickwrite-bar__datenum').forEach((el) => {
                el.innerHTML = rd.getDate() + n;
                n++;
            });
            document.querySelectorAll('.rect-card__quickwrite-date span').forEach((el) => {
                el.innerHTML = `${n}:${n*2}`;
                if (n === 24)
                    n = 1;
                else
                    n++;
            });
        }
    };

    el.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'img')
            return false;

        if (ev.target.classList.contains('rect-card__quickwrite-date') ||
            ev.target.parentElement.classList.contains('rect-card__quickwrite-date')) {
            quickVisit(ev.target);
            return false;
        }

        block.style.display = 'flex';
        block.querySelector('.selected-master__name').innerHTML = el.querySelector('.rect-card__name').innerHTML;
        block.querySelector('.selected-master__avatar').src = el.querySelector('.rect-card__avatar').src;
        block.querySelector('.selected-master__spec').style.display = 'flex';
        block.querySelector('.selected-master__quick-write').style.display = 'none';
        document.querySelector('.select-buttons').style.display = 'none';
    });
});

document.querySelector('.selected-master__closebtn').addEventListener('click', (ev) => {
    window.location.reload();
});

document.querySelector('.main-header__rightbar').addEventListener('click', (ev) => {
    if (document.getElementById('service').classList.contains('select-buttons_pickedbtn'))
        document.getElementById('mast').dispatchEvent(new Event('click'));
    else
        document.getElementById('service').dispatchEvent(new Event('click'));
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.select-buttons__btnitem').dispatchEvent(new Event('click'));
    document.querySelector('.select-buttons__btnitem').classList.add('select-buttons_pickedbtn');
    document.querySelectorAll('.select-buttons__btnitem').forEach((el) => {
        el.addEventListener('click', (ev) => {
            if (el.id == 'mast') {
                el.classList.add('select-buttons_pickedbtn');
                document.getElementById('service').classList.remove('select-buttons_pickedbtn');
            }
            else {
                el.classList.add('select-buttons_pickedbtn');
                document.getElementById('mast').classList.remove('select-buttons_pickedbtn');
            }
        });
    });
});