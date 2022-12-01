function lol(n){
    let x = document.querySelector(n);
    let y = document.querySelectorAll(".rates");
    for ( let i = 0; i<y.length ;i++){
        y[i].style.display="none"
    }
    x.style.display="block"
    
}
