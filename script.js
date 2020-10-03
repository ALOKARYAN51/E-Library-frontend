let sliderLeftButton = document.querySelector('#slider-left-button')
let sliderRightButton = document.querySelector('#slider-right-button')

sliderLeftButton.addEventListener('click', () => plusDivs(-1))
sliderRightButton.addEventListener('click', () => plusDivs(1))

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("bookimg");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}