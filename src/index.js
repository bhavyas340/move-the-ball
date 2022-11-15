import "./styles.css";
// var ball=document.getElementById('ball');
// ball.addEventListener('click',function k(){
//   var margin;
//   for(var i=0;i<5;i++){
//   var value = this.textContent.trim().toLowerCase();
//   console.log(value);
//   // if(value=='w'){
//    margin += ball.style.marginLeft = '20px';
//    ball.margin=margin + '20px';
//   // }

//   }
// });
document.onkeydown = detectKey;
function detectKey(e) {
  var posLeft = document.getElementById("myId").offsetLeft;
  var posTop = document.getElementById("myId").offsetTop;
  e = e || window.event;
  if (e.keyCode == "87" && posTop >= 50) {
    // up arrow
    document.getElementById("myId").style.marginTop = posTop - 58 + "px";
  } else if (e.keyCode == "83" && posTop <= 174) {
    // down arrow
    document.getElementById("myId").style.marginTop = posTop + 58 + "px";
  } else if (e.keyCode == "65" && posLeft >= 50) {
    // left arrow
    document.getElementById("myId").style.marginLeft = posLeft - 58 + "px";
  } else if (e.keyCode == "68" && posLeft <= 600) {
    // right arrow
    document.getElementById("myId").style.marginLeft = posLeft + 58 + "px";
  }
  console.log(posTop);
}
