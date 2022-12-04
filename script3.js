function lol(n){ //onclick function for the stars(for the forms), when u click a star a text-message appears
    let x = document.querySelector(n);
    let y = document.querySelectorAll(".rates");
    for ( let i = 0; i<y.length ;i++){
        y[i].style.display="none"
    }
    x.style.display="block"
    
}
