document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('chooseTime').addEventListener('click', function () { setChoosing(1) });
    document.getElementById('chooseMaster').addEventListener('click', function () { setChoosing(2) });
    document.getElementById('chooseService').addEventListener('click', function () { setChoosing(3) });

});


function setChoosing(num) {
    var tmSection = document.getElementById('SetTime');
    var msSection = document.getElementById('setMaster');
    var svSection = document.getElementById('setService');

    switch(num) {
        case 1:
            tmSection.classList.add("showedSection");
            tmSection.classList.remove("hiddenSection");
            msSection.classList.add("hiddenSection");
            msSection.classList.remove("showedSection");
            svSection.classList.add("hiddenSection");
            svSection.classList.remove("showedSection");
            break;

        case 2:
            tmSection.classList.add("hiddenSection");
            tmSection.classList.remove("showedSection");
            msSection.classList.add("showedSection");
            msSection.classList.remove("hiddenSection");
            svSection.classList.add("hiddenSection");
            svSection.classList.remove("showedSection");
            break;

        case 3:
            tmSection.classList.add("hiddenSection");
            tmSection.classList.remove("showedSection");
            msSection.classList.add("hiddenSection");
            msSection.classList.remove("showedSection");
            svSection.classList.add("showedSection");
            svSection.classList.remove("hiddenSection");
            break
    }
}

window.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop > 140){
        document.getElementsByClassName('buttons-button buttons-button_times')[0].classList.add("trick");
        document.getElementsByClassName('buttons-button buttons-button_master')[0].classList.add("trick");
        document.getElementsByClassName('buttons-button buttons-button_service')[0].classList.add("trick");

        document.getElementById('main').classList.add("crik");
    }else{
        document.getElementsByClassName('buttons-button buttons-button_times')[0].classList.remove("trick");
        document.getElementsByClassName('buttons-button buttons-button_master')[0].classList.remove("trick");
        document.getElementsByClassName('buttons-button buttons-button_service')[0].classList.remove("trick");

        document.getElementById('main').classList.remove("crik");
    }

});


