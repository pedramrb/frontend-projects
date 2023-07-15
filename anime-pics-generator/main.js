const btnele = document.getElementById("btn");
const piccontainerele = document.querySelector(".pic-container");
const pictureele = document.querySelector(".picture")
const animeNameele = document.querySelector(".aime-name")

btnele.addEventListener("click", async function(){
    try{
        btnele.disabled = true;
        btnele.innerText = "Loading...";
        animeNameele.innerText = "Updating...";
        pictureele.src = "spinner.svg"
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnele.disabled = false;
        btnele.innerText = "Get Picture";
        piccontainerele.computedStyleMap.display = "block";
        pictureele.src = data.url;
        animeNameele.innerText = data.artist;
    } catch(error){
        console.log(error)
        btnele.disabled = false;
        btnele.innerText = "Get Picture";
        animeNameele.innerHTML = "An error happened, please try again";
    }
});