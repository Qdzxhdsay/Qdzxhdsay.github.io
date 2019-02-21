var tabContent = document.getElementsByClassName('tab-content');
var tab = document.getElementsByClassName('tab');

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;

    if (target.className ==='tab') {
        for (var i=0; i<tab.length; i++) {
            if (target === tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
};


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


