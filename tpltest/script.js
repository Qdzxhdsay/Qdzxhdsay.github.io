var tabContent = document.getElementsByClassName('tpl-main_tabcontent');
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





var openGroup = document.getElementById('addGroupBlock');
var openSolo = document.getElementById('addSoloBlock');
var addNew = document.getElementById('addClient');

var glCount = "";

addSolo.addEventListener('click',function () {
    glCount = 1;
});

addGroup.addEventListener('click',function () {
    glCount = 2;
});

addNew.addEventListener('click',function () {
    console.log(glCount);
    if(glCount === 1){
        solo();
    }
    else if (glCount === 2){
        group();
    }
});


function solo() {
    if(openSolo.style.display==="none"){
        openSolo.style.display="flex";
    }
    else{
        openSolo.style.display="none";
    }
}

function group() {
    if(openGroup.style.display==="none"){
        openGroup.style.display="flex";
    }
    else{
        openGroup.style.display="none";
    }
}



var visitWrapper = document.getElementById('addVisitPick');
var serviceWrapper = document.getElementById('addServicePick');
var masterWrapper = document.getElementById('addMasterPick');

pickServices.addEventListener('click',function () {
        visitWrapper.style.display = "none";
        serviceWrapper.style.display = "block";
});

serviceBack.addEventListener('click',function () {
    visitWrapper.style.display = "block";
    serviceWrapper.style.display = "none";
});


pickMasters.addEventListener('click',function () {
    visitWrapper.style.display = "none";
    masterWrapper.style.display = "block";
});


masterBack.addEventListener('click',function () {
    visitWrapper.style.display = "block";
    masterWrapper.style.display = "none";
});


