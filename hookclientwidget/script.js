window.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop > 10){
        document.getElementsByClassName('header-brand')[0].classList.add("dropShadow");
    }else{
        document.getElementsByClassName('header-brand')[0].classList.remove("dropShadow");
    }
});


let quickWriteLink = document.getElementsByClassName("card-list-item-quickwrite-date");
let quickWriteTime = document.getElementsByClassName("card-list-item-quickwrite-time");


for (let i = 0; i < quickWriteLink.length; i++) {
    let collectLinks = quickWriteLink[i];
    collectLinks.addEventListener('click', function () {
        if (collectLinks.classList.contains('quickwrite-active')) {
            collectLinks.classList.remove("quickwrite-active");
            collectLinks.parentNode.getElementsByClassName('card-list-item-quickwrite-time');
            for (let j = 0; j < quickWriteTime.length; j++) {
                let collectTime = quickWriteTime[j];
                collectTime.classList.remove('qw');
            }
        }
        else {
            collectLinks.classList.add("quickwrite-active");
            for (let j = 0; j < quickWriteTime.length; j++) {
                let collectTime = quickWriteTime[j];
                collectTime.classList.add('qw');
            }
        }
    });
}

/*
quickWriteButtons.addEventListener('click',function () {
    if(quickWriteButtons.classList.contains('quickwrite-active')){
        quickWriteButtons.classList.remove("quickwrite-active");
    }else{
        quickWriteButtons.classList.add("active");
    }
});*/
