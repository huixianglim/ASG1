var slideIndex = 1; //slider 
showSlides(slideIndex);
function plusSlides(n) { //function for the arrow key
    showSlides(slideIndex += n);
}
function CurrentSlides(n) { //function for the dots
    showSlides(slideIndex = n)
}
function showSlides(n) { //showing each slide function
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active"
}

setInterval(function() { //time interval for auto moving image slider
    plusSlides(1)
  }, 5000);
