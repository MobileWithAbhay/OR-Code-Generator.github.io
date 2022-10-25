var result=document.getElementById('result');
var url_input=document.getElementById('url');
var grab=document.getElementById('Grabber');
let downloadbtn=document.querySelector('#down');
let img=document.querySelector('img');

grab.addEventListener("click",()=>{
  if (url_input!=""){
    var url2=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url_input.value}`
    img.src=url2;
    ;}
});
downloadbtn.addEventListener("click",()=>{
  let imgPath=img.getAttribute('src');
  let fileName=getFileName(imgPath);
  saveAs(imgPath,fileName);
});
function getFileName(str){
  return str.substring(str.lastIndexOf('/'+1));
}
