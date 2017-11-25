
let search = document.getElementById("search");
let hero = document.getElementsByClassName("hero");
search.addEventListener("focus", expandHero);
search.addEventListener("focusout", expandHero);


function expandHero (e) {
     hero[0].classList.toggle("hero__form-focus");

}