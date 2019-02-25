var tabContent = document.getElementsByClassName('tab-content');
var tab = document.getElementsByClassName('tab');

document.getElementById('tabs').querySelectorAll('.tab').forEach(function (elem, i) {
    elem.addEventListener('click', function () {
        showTabsContent(i);
    });
});


function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('activeboard');
    }
}


function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('activeboard');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

let calendar;

document.addEventListener('DOMContentLoaded', function () {
    calendar = new miniCalendar(document.getElementById('calendar'));
});