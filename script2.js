var slideIndex = 1; //slider
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n); //function for the arrow keys
}
function CurrentSlides(n) {
    showSlides(slideIndex = n) //function for the dots
}
function showSlides(n) { //function for showing the slider images
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

setInterval(function() { //auto set time intervals for auto moving image sliders
    plusSlides(1)
  }, 5000);

//page 2
showFilter(2) //filter function
showDrop(1) //drop filter function
function filter(n){ //filter function for onlick buttons
    let filter = document.getElementById(n);
    showFilter(1)
    let slides = document.getElementsByClassName("filter");
    slides[0].style.display ="none"
    filter.style.display = "block"

}
function showFilter(n) { //show the wanted filtered section at the start of the website prior to any filter changes
    let i;
    let slides = document.getElementsByClassName("filter");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display ="none"
        slides[n - 1].style.display ="block"
    }
}
function dropdown(n){  //function for the dropdown filter (onchange)
    let values = document.getElementById(n);
    showDrop(1);
    let dropdown = document.getElementsByClassName("dropdown");
    dropdown[0].style.display="none"
    values.style.display = "block"
    
}
let movies = [["Wakanda Forever","Wakanda.html"],["The Shining","shining.html"],["Black Adam","Black-Adam.html"], //movie array box
["Doctor Strange MOM","doctorstrange.html"],["La La Land","lalaland.html"],["Penisula","penisula.html"],["The Batman","batman.html"]
,["Enola Holmes","enolaholmes.html"],["SpiderMan NWH","spiderman.html"]]
let sortedMovies = movies.sort() //sort movie names in alphabetical order
let input = document.getElementById("input")
input.addEventListener("keyup", function(){
    removeElements();
    for (let i of sortedMovies){

        //convert input into lowercase for comparison
        
        if(i[0].toLowerCase().includes(input.value.toLowerCase()) && input.value != "" ){//if input value is in the array, add the array to the search box recommendation
            let listItem =document.createElement("li");            //adding the li elements with movie names into the search if prompted
            listItem.classList.add("list-items");
            listItem.style.cursor ="pointer"
            let word = "<a href ="+i[1]+">" +i[0]+"</a>"
            listItem.innerHTML=word;
            document.querySelector(".list").appendChild(listItem)
        }
    }
});
function removeElements(){
    let items = document.querySelectorAll(".list-items"); //remove the search items if not needed
    items.forEach((item)=>{
        item.remove()
    });
}
function showDrop(n) {
    let i;
    let dropdown = document.getElementsByClassName("dropdown"); //show the wanted filtered section at the start of the website prior to any filter changes
    for (i = 0; i < dropdown.length; i++){
        dropdown[i].style.display ="none"
        dropdown[n - 1].style.display ="block"
    }
}


