let headerBlock = document.getElementsByClassName('header-brand')[0];

window.addEventListener('scroll', function() {
    console.log("D");
    if(window.pageYOffset>0){
        headerBlock.classList.add('dropShadow');
    }else{
        headerBlock.classList.remove('dropShadow');
    }
});


const masterBlocks = document.querySelectorAll('.master-cards-wrapper');

masterBlocks.forEach(function (block) {
    let buttons = block.querySelectorAll('button.button.card-list-item-quickwrite-date');
    buttons.forEach(function (button) {
        button.addEventListener('click', function(event){
            let timeline = block.querySelector('.card-list-item-quickwrite-time');
            if(timeline.classList.contains('qw')) timeline.classList.remove('qw');
            else timeline.classList.add('qw');
        })
    })
});








/*
let headerBlock = document.getElementsByClassName('header-brand')[0];

window.onscroll = function() {
    console.log("huy");
    if(window.pageYOffset>10){
       if(headerBlock.classList.contains('dropShadow')){

       }
       else{
           headerBlock.classList.add('dropShadow');
       }
    }
    else if(window.pageYOffset<10){
        headerBlock.classList.remove('dropShadow');
    }

};

*/



/*
window.onscroll = function() {
    if (document.documentElement.scrollTop >= 10) {
        document.getElementsByClassName('header-brand')[0].classList.add('dropShadow');
    } else {
        document.getElementsByClassName('header-brand')[0].classList.remove('dropShadow');
    }
};
*/



