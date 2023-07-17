const bgImageele = document.getElementById("bg-image");

window.addEventListener("scroll",()=>{
    updateImage();
})

function updateImage(){
    bgImageele.style.opacity=1-window.pageYOffset/900;
    bgImageele.style.backgroundSize=160-window.pageYOffset/12 +"%"
}