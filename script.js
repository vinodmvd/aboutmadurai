/* Image slider */

var restaurant = document.getElementById('tooltip1');
var temple = document.getElementById('tooltip2');
var otherplaces = document.getElementById('tooltip3');
var highlights = document.getElementById('tooltip4')

window.onload = function(){
  highlights.onclick = function(){
    myValue = document.getElementsByClassName('slides4');
    index=1;
    showImage();
  }
restaurant.onclick = function(){
  myValue = document.getElementsByClassName('slides1');
  index=1;
  showImage();
}
temple.onclick = function(){
  myValue = document.getElementsByClassName('slides2');
  index=1;
  showImage();
 }
otherplaces.onclick = function(){
  myValue = document.getElementsByClassName('slides3');
  index=1;
  showImage();
 }

}

function next(){
  index = index + 1;
  showImage(index);
}

function prev(n){
  index = index - 1;
  showImage(index);
}
    var index=1;
    myValue = document.getElementsByClassName('slides4');
    showImage();
function showImage(n){
   if(n > myValue.length){ index = 1;}
  if(n < 1){ index = myValue.length;}
  for(i=0; i<myValue.length;i++){
     myValue[i].style.display ="none";
  }
  myValue[index-1].style.display =  "block";
  return;
}


/* Scroller */
var scroll = document.getElementById("scroll");
var highlights = document.getElementById("scroll1-function");
var restaurant = document.getElementById("scroll2-function");
var temple = document.getElementById("scroll3-function");
var otherplaces = document.getElementById("scroll4-function");

scroll.onclick = function(){
  if(highlights.className == 'active'){
  scroll.href = "#highlights";
  }
  else if(restaurant.className == 'active'){
    scroll.href = "#restaurant";
  }
  else if(temple.className == 'active'){
    scroll.href = "#temple";
  }
  else if(otherplaces.className == 'active'){
    scroll.href = "#otherplaces";
  }
}
