let profileBar = document.getElementsByClassName('profile-bar')[0];
let profileCard = document.getElementsByClassName('profile-card')[0];
let profileName = document.getElementsByClassName('profile-bar-name')[0];

window.addEventListener('scroll', function() {
    if(window.pageYOffset>330){
        profileBar.classList.add('dropShadow');
        profileName.classList.add('vs');
        profileCard.classList.add('vm');
    }else{
        profileBar.classList.remove('dropShadow');
        profileName.classList.remove('vs');
        profileCard.classList.remove('vm');
    }
});
