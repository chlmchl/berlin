function init(){
  w=document.body.offsetWidth;
  h=document.body.offsetHeight;
  rd=document.getElementsByTagName('div');
for(c=0;c<rd.length;c++) {
if(rd[c].className=='random') {
   xCoord=Math.floor(Math.random()*w);
   yCoord=Math.floor(Math.random()*h);
if(xCoord>=w-rd[c].offsetWidth-10){
   xCoord=w-rd[c].offsetWidth-10;
 }
if(xCoord<=10){
   xCoord=10;
 }
if(yCoord>=h-rd[c].offsetHeight-10){
   yCoord=h-rd[c].offsetHeight-10;
 }
if(yCoord<=10){
   yCoord=10;
 }
   rd[c].style.left=xCoord+'px';
   rd[c].style.top=yCoord+'px';
   }
  }
 }

function refreshInit(){
  init();
  
  setTimeout(refreshInit, 5000);
}

$(document).ready(function() {
  refreshInit();
});


  window.addEventListener?
  window.addEventListener('click',init,false):
  window.attachEvent('onclick',init);
  

//  .o88b. db   db  .d8b.  d8888b. d888888b d888888b d8888b. d88888b       db 
// d8P  Y8 88   88 d8' `8b 88  `8D   `88'   `~~88~~' 88  `8D 88'          o88 
// 8P      88ooo88 88ooo88 88oodD'    88       88    88oobY' 88ooooo       88 
// 8b      88~~~88 88~~~88 88~~~      88       88    88`8b   88~~~~~       88 
// Y8b  d8 88   88 88   88 88        .88.      88    88 `88. 88.           88 
//  `Y88P' YP   YP YP   YP 88      Y888888P    YP    88   YD Y88888P       VP 
                                                                           
 

function q1false() {
    var x = document.getElementById("false").value;
    document.getElementById("demo").innerHTML = x;
    document.getElementById("start").show;

}
function q1true() {
    var x = document.getElementById("true").value;
    document.getElementById("demo").innerHTML = x;
    document.getElementById("demo").show;

} 

function q1false2() {
    var x = document.getElementById("false2").value;
    document.getElementById("demo").innerHTML = x;
    document.getElementById("demo").show;

}                                            