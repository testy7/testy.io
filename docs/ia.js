
alert(document);
$.ajax({
    url: 'https://ptsv2.com/t/fyrw2-1641653611/post',
    type: 'post',
    data: {
        access_token: 'XXXXXXXXXXXXXXXXXXX'
    },
    headers: {
        Header_Name_One: 'Header Value One',   //If your header name has spaces or any other char not appropriate
        "Header Name Two": 'Header Value Two'  //for object property name, use quoted notation shown in second
    },
    dataType: 'json',
    success: function (data) {
        console.info(data);
    }
});
