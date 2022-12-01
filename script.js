var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function CurrentSlides(n) {
    showSlides(slideIndex = n)
}
function showSlides(n) {
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

setInterval(function() {
    plusSlides(1)
  }, 5000);

//page 2
showFilter(2)
showDrop(1)
function filter(n){
    let filter = document.getElementById(n);
    showFilter(1)
    let slides = document.getElementsByClassName("filter");
    slides[0].style.display ="none"
    filter.style.display = "block"

}
function showFilter(n) {
    let i;
    let slides = document.getElementsByClassName("filter");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display ="none"
        slides[n - 1].style.display ="block"
    }
}
function dropdown(n){
    let values = document.getElementById(n);
    showDrop(1);
    let dropdown = document.getElementsByClassName("dropdown");
    dropdown[0].style.display="none"
    values.style.display = "block"
    
}
//page 3
function showDrop(n) {
    let i;
    let dropdown = document.getElementsByClassName("dropdown");
    for (i = 0; i < dropdown.length; i++){
        dropdown[i].style.display ="none"
        dropdown[n - 1].style.display ="block"
    }
}
