/*

let headerShadow;
let quickPickerBtn;
let selectBtn;
let quickPickerPanel;
let quickPanelItem;



document.addEventListener('DOMContentLoaded', function () {
    headerShadow = document.getElementsByClassName('main-header hipster-widget__header')[0];
    quickPickerBtn = document.querySelectorAll('.search-bar__navbtn')[1];
    selectBtn = document.querySelectorAll('.select-buttons__btnitem');
    quickPickerPanel = document.getElementsByClassName('quickwrite-bar')[0];
    quickPanelItem = document.querySelectorAll('.quickwrite-bar__item');



    window.addEventListener('scroll', function() {
    if(window.pageYOffset>0){
        headerShadow.classList.add('dropShadow');
    }else{
        headerShadow.classList.remove('dropShadow');
    }
});


quickPickerBtn.addEventListener('click', function () {
    if (quickPickerPanel.classList.contains('quickwrite-bar_show')) {
        quickPickerPanel.classList.remove('quickwrite-bar_show');
    }
    else {
        quickPickerPanel.classList.add('quickwrite-bar_show');
    }
});

quickPanelItem.forEach((el) => {
    el.addEventListener('click', (ev) => {
        if(el.classList.contains('quickwrite-bar__pickeddate')) {
            el.classList.remove('quickwrite-bar__pickeddate');
        }
        else {
            el.classList.add('quickwrite-bar__pickeddate');
        }
    })
});


selectBtn.forEach((el) => {
    el.addEventListener('click', (ev) => {
        if(el.classList.contains('select-buttons_pickedbtn')) {
            el.classList.remove('buttons_pickedbtn');

        }
        else {
            el.classList.add('buttons_pickedbtn');
        }
    });
});


    selectBtn.forEach((el) => {
        el.addEventListener('click', (ev) => {
            if(el.classList.contains('select-buttons_pickedbtn')) {
                el.classList.remove('buttons_pickedbtn');

            }
            else {
                el.classList.add('buttons_pickedbtn');
            }
        });
    });

});*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quick_hide').forEach((el) => {
        el.addEventListener('click', (ev) => {
            document.querySelectorAll(`.${el.dataset.hide}`).forEach((hel) => {
                hel.style.display = "none";
            });
        });
    });
    document.querySelectorAll('.quick_open').forEach((el) => {
        el.addEventListener('click', (ev) => {
            document.querySelectorAll(`.${el.dataset.open}`).forEach((oel) => {
                oel.style.display = "flex";
            });
        });
    });
    document.querySelectorAll('.quick_change').forEach((el) => {
        el.addEventListener('click', (ev) => {
            document.querySelectorAll(`.${el.dataset.change}`).forEach((cel) => {
                switch (cel.style.display) {
                    case 'flex':
                        cel.style.display = 'none';
                        break;
                    case 'none':
                        cel.style.display = 'flex';
                        break;
                    default:
                        cel.style.display = 'flex';
                        break;
                }
            });
        });
    });
});