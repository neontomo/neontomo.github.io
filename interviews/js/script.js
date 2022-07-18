var username = '';

if (document.querySelector('#username')) {
    username = document.querySelector('#username').getAttribute('at').substring(1);
}


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/neontomo.com/" + username);
xhr.send();