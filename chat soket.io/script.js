var field = document.getElementsByClassName('soket-io_chat-field')[0];
var leftBar = document.getElementsByClassName('soket-io__online-users')[0];
var messageButton = document.getElementById('but');
var userStatus = document.getElementsByClassName('soket-io__member-status')[0];

messageButton.onclick = function () {
    var inputMessage = document.getElementById('mes').value;
    myNewMessage(name, inputMessage, time);
};


function myNewMessage(user, name, inputMessage, time) {
    var newMessageBlock = document.createElement('div');
    var newMessageUserName = document.createElement('h3');
    var newMessageText = document.createElement('p');
    var newMessageTime = document.createElement('p');

    if (user === true) var mey = "you";
    else var mey = "user";

    newMessageBlock.className = "chat-field__cloud_"+mey;
    newMessageUserName.className = "chat-field__headline_"+mey;
    newMessageText.className = "chat-field__message_"+mey;
    newMessageTime.className = "chat-field__time_"+mey;

    newMessageUserName.innerHTML = name;
    newMessageText.innerHTML = inputMessage;
    newMessageTime.innerHTML = time;

    newMessageBlock.appendChild(newMessageUserName);
    newMessageBlock.appendChild(newMessageText);
    newMessageBlock.appendChild(newMessageTime);

    field.appendChild(newMessageBlock);
}


function status (status,name){
    if(status===true){
        userStatus.innerHTML = `${name} is <span style='color:#98F179'>online</span> now...`;
    }
    else{
        userStatus.innerHTML = `${name} is <span style='color:#E77B7B'>online</span> now...`;
    }
}


function leftBarUsers(status,name){
    var newLeftBarUser = document.createElement('div');
    var newLeftBarUserStatus = document.createElement('div');
    var newLeftBarUserName = document.createElement('p');

    newLeftBarUser.className = "soket-io__online-user";
    newLeftBarUserStatus.className = "soket-io__user-online-circle";
    newLeftBarUserName.className = "soket-io__online-user-name";

    newLeftBarUserName.innerHTML = `${name}`;

    newLeftBarUser.appendChild(newLeftBarUserStatus);
    newLeftBarUser.appendChild(newLeftBarUserName);

    leftBar.appendChild(newLeftBarUser);
}



/*function myG(user, name, inputMessage, time) {

    if (user === true) var mey = "you";
    else var mey = "user";

    newMessageBlock.innerHTML =
        `
            <h3 class="chat-field__headline_${mey}">${name}</h3>
            <p class="chat-field__message_${mey}">${inputMessage}</p>
            <p class="chat-field__time_${mey}">${time}</p>
        `;
}*/

