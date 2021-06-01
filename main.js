//background slider

var slideImg = document.getElementById("slideImg");

var images = new Array(
  "car5.jpeg",
  "car.jpeg", 
  "car4.jpeg",
  "car2.jpg"
);

var len = images.length;
var i = 0;

function slider (){
  if(i > len-1){
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()',3000);
}

//sell a  car button
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  
