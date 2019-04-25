let headerShadow;
let defaultInfo;
let masterInfo;
let headerCloseBtn;
document.addEventListener('DOMContentLoaded', function () {
    headerShadow = document.getElementsByClassName('main-header hipster-widget__header')[0];
    defaultInfo = document.getElementsByClassName('main-header__defaulinfo')[0];
    masterInfo = document.getElementsByClassName('main-header__masterpicked')[0];
    headerCloseBtn = document.getElementsByClassName('main-header__closebtn')[0];

    window.addEventListener('scroll', function() {
    if(window.pageYOffset>0){
        headerShadow.classList.add('dropShadow');
    }else{
        headerShadow.classList.remove('dropShadow');
    }

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            headerShadow.classList.add('dropShadow');
            defaultInfo.classList.add('mainhide');
            masterInfo.classList.remove('mainhide');
            headerCloseBtn.classList.remove('mainhide');
        } else {
            headerShadow.classList.remove('dropShadow');
            defaultInfo.classList.remove('mainhide');
            masterInfo.classList.add('mainhide');
            headerCloseBtn.classList.add('mainhide');
        }

    });
});

});

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

    document.querySelectorAll('.class_drop').forEach((el) => {
        el.addEventListener('click', (ev) => {
            document.querySelectorAll(`.${el.dataset.drop}`).forEach((del) => {
                del.classList.remove(el.dataset.classd);
            });
        });
    });
    document.querySelectorAll('.class_add').forEach((el) => {
        el.addEventListener('click', (ev) => {
            document.querySelectorAll(`.${el.dataset.add}`).forEach((ael) => {
                ael.classList.add(el.dataset.classa);
            });
        });
    });
    document.querySelectorAll('.class_change').forEach((el) => {
        el.addEventListener('click', (ev) => {
            el.classList.toggle(el.dataset.class);
        });
    });
});