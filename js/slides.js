var slideIndex = 0;
var slideIndexGi = 0;
showSlides();
showSlidesGi();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function showSlidesGi() {
  var i;
  var slides = document.getElementsByClassName("slideGi");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexGi++;
  if (slideIndexGi > slides.length) {slideIndexGi = 1}
  slides[slideIndexGi-1].style.display = "block";
  setTimeout(showSlidesGi, 5000); // Change image every 4 seconds
}