const hoverElt = document.querySelector(".hover-elt")
const navLink = document.querySelector(".navbar > ul")
const navLinks = Array.from(document.querySelectorAll(".navbar > ul > li"))

if (!hoverElt || !navLink) {
    throw new Error("Element not found")
}

function handleHover(e) {
    const navLinkX = navLink.getBoundingClientRect().x
    const eltLink = e.target.getBoundingClientRect().x
    const posLeft = eltLink - navLinkX
    hoverElt.style.opacity = "1"
    hoverElt.style.left = `${posLeft}px`
    hoverElt.style.width = `${e.target.offsetWidth}px`
}

function handleLeave() {
    hoverElt.style.opacity = "0"
}

navLinks.forEach((elt) => {
    elt.addEventListener("mouseenter", handleHover)
    elt.addEventListener("mouseleave", handleLeave)
})


//---------------------------------Visible and Unvisible----------------------------

const ratio = .1
const options ={
    root: null,
    rootMargin: "0px",
    threshold: ratio,
}
const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('block-visible');
            observer.unobserve(entry.target);
        }

    })
    console.log('callback');
}
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll('.block').forEach(function(r){
    observer.observe(r);
})


//-----------------------------------Accordion-----------------------------------------------
const accordions = document.querySelector(".accordion")
const panel = document.querySelector(".panel")

accordions.addEventListener("click", function () {
    this.classList.toggle("active")

    if (panel.classList.contains("show")) {
        panel.classList.remove("show")
    } else {
        panel.classList.add("show")
    }
})


//---------------------------------------------Slide-----------------------------------------

new Swiper('.card-wrapper', {

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    /*Responsive*/
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        900:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3,
        }
    },
    timeout: 3000,


})

/*-----------------------------------Responsive-----------------------------------*/

let openSubMenu = document.querySelectorAll(".main_title")
let closeSubMenu = document.querySelectorAll(".position")
let subMenu = document.querySelectorAll(".sub-menu")
let Menu = document.querySelector(".nav-ul")
let navbar = document.querySelector(".navbar")
let closeSidebarButton = document.querySelector(".close-sidebar-button")
let openSidebarButton = document.querySelector(".open-sidebar-button")

openSubMenu.forEach((title,index) => {
    title.addEventListener("click", function (){
        subMenu[index].classList.toggle("Active");
        subMenu[index].style.position = "fixed";
        subMenu[index].style.top = "-100px";
        subMenu[index].style.left = "25px";
        subMenu[index].style.width = "100vw";
        subMenu[index].style.zIndex = "100000";
        subMenu[index].style.transition = ".5";
        closeSidebarButton.style.display = "none";
    })
})

closeSubMenu.forEach((title, index) => {
    title.addEventListener("click", function (){
        subMenu[index].classList.remove("Active");
        subMenu[index].style.position = "absolute";
        subMenu[index].style.top = "-100px";
        subMenu[index].style.left = "25px";
        subMenu[index].style.width = "100vw"; // Remettre la largeur par défaut
        subMenu[index].style.zIndex = "1000";
        subMenu[index].style.transition = ".5";
        closeSidebarButton.style.display = "block";
    })
})
closeSidebarButton.addEventListener("click", function (){
    closeSidebarButton.style.display = "none";
})
openSidebarButton.addEventListener("click", function (){
    closeSidebarButton.style.display = "block";
})