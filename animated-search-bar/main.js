
const searchBarContainerele = document.querySelector(".search-bar-container");
const magnifierele = document.querySelector(".magnifier");

magnifierele.addEventListener("click", () =>{
    searchBarContainerele.classList.toggle("active")
})