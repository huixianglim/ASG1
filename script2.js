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
let movies = [["Wakanda Forever","Wakanda.html"],["The Shining","shining.html"],["Black Adam","Black-Adam.html"],
["Doctor Strange MOM","doctorstrange.html"],["La La Land","lalaland.html"],["Penisula","penisula.html"],["The Batman","batman.html"]
,["Enola Holmes","enolaholmes.html"],["SpiderMan NWH","spiderman.html"]]
let sortedMovies = movies.sort() //sort movie names in alphabetical order
let input = document.getElementById("input")
input.addEventListener("keyup", function(){
    removeElements();
    for (let i of sortedMovies){

        //convert input into lowercase for comparison
        
        if(i[0].toLowerCase().includes(input.value.toLowerCase()) && input.value != "" ){//if input value is in the array, add the array to the search box recommendation
            let listItem =document.createElement("li");            
            listItem.classList.add("list-items");
            listItem.style.cursor ="pointer"
            let word = "<a href ="+i[1]+">" +i[0]+"</a>"
            listItem.innerHTML=word;
            document.querySelector(".list").appendChild(listItem)
        }
    }
});
function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item)=>{
        item.remove()
    });
}
function showDrop(n) {
    let i;
    let dropdown = document.getElementsByClassName("dropdown");
    for (i = 0; i < dropdown.length; i++){
        dropdown[i].style.display ="none"
        dropdown[n - 1].style.display ="block"
    }
}


