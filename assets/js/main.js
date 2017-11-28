
// // Declearation

const images = document.querySelectorAll('img[data-src]');
const config = {
    rootMargin: '50px 0px',
    threshold: 0.01
};
let observer;
let toggle = document.getElementById("toggle");
let nav = document.getElementById("nav");
let navLinks = nav.children[0].children;

// let search = document.getElementById("search");
// let hero = document.getElementsByClassName("hero");

// // Event Listeners

// search.addEventListener("focus", expandHero);
// search.addEventListener("focusout", expandHero);
toggle.addEventListener("click", toggleNav);
Array.prototype.forEach.call(navLinks, function (nav, index) {
console.log(nav.children[0])
nav.children[0].addEventListener("click", gotoSection)


})
// // Functions

function gotoSection (e) {
  e.preventDefault();
if (nav.classList.contains("active")) nav.classList.toggle("active");
elementIdName = e.target.attributes.href.value
element = document.getElementById(elementIdName);

smoothScroll(element);
};

// function expandHero (e) {
//      hero[0].classList.toggle("hero__form-focus");

// }

function toggleNav() {

nav.classList.toggle("active")

}

window.onload = function () {


if ('IntersectionObserver' in window) {
  observer = new IntersectionObserver(onChange, config);
  images.forEach(img => observer.observe(img));
} else {
  console.log('%cIntersection Observers not supported', 'color: red');
  images.forEach(image => loadImage(image));
}

const loadImage = image => {
  
  image.src = image.dataset.src;
}

function onChange(changes, observer) {
  changes.forEach(change => {
    if (change.intersectionRatio > 0) {
      // Stop watching and load the image
      loadImage(change.target);
      observer.unobserve(change.target);
    }

  });
}


}


function smoothScroll (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
