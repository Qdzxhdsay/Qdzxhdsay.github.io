document.addEventListener('DOMContentLoaded', function () {
    let quickPickerBtn = document.getElementById('quickPicker');
    let headerShadow = document.getElementsByClassName('main-header hipster-widget__header')[0];
    let scrolledContent = document.getElementsByClassName('hipster-widget__content')[0];
    
window.addEventListener('scroll', function() {
    if(window.pageYOffset>0||scrolledContent.scrollTop>0){
        headerShadow.classList.add('dropShadow');
    }else{
        headerShadow.classList.remove('dropShadow');
    }
});


quickPickerBtn.addEventListener('click',function () {
    let editing = document.querySelector('.quickwrite-bar');
    if (editing.classList.contains('quickwrite-bar_show')){
        editing.classList.remove('quickwrite-bar_show');
    }
    else{
        editing.classList.add('quickwrite-bar_show');
    }

    });
});