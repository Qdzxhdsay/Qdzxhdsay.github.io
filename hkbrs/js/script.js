let headerMenuBtns = document.querySelectorAll('.main-menu__item');
console.log(headerMenuBtns);

for (i = 0; i < headerMenuBtns.length; i++) {
    headerMenuBtns[i].addEventListener("click", function() {
        if(this.classList.contains('main-menu_pickedbtn')){
        }
        else{
            let blue = document.querySelector('.main-menu_pickedbtn');
            blue.classList.remove("main-menu_pickedbtn");
            this.classList.add("main-menu_pickedbtn");
        }
    });
}
