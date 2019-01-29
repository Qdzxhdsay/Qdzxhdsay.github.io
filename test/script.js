let headerBlock = document.getElementsByClassName('header-brand')[0];


window.addEventListener('scroll', function() {
    if(window.pageYOffset>0){
        headerBlock.classList.add('dropShadow');
    }else{
        headerBlock.classList.remove('dropShadow');
    }
});


const masterBlocks = document.querySelectorAll('.card-item');

masterBlocks.forEach(function (block) {
    let buttons = block.querySelectorAll('button.card-list-item-quickwrite-date');
    buttons.forEach(function (button) {
        button.addEventListener('click', function(event){
            let timeline = block.querySelector('.card-list-item-quickwrite-time');
            if(timeline.classList.contains('qw')){
                timeline.classList.remove('qw');
            }
            else {
                timeline.classList.add('qw');
            }
        })
    })
});










/*
let profileBar = document.getElementsByClassName('profile-bar')[0];


window.addEventListener('scroll', function() {
    if(window.pageYOffset>0){
        profileBar.classList.add('dropShadow');
    }else{
        profileBar.classList.remove('dropShadow');
    }
});
*/
