
//new QRCode(document.getElementById('qrcode'),'http://www.runoob.com');
var qrcode=new QRCode(document.getElementById('qrcode'),{
    text:'1234567',
    width:256,
    height:256,
   
});
//qrcode.clear();
//qrcode.makeCode('new content');