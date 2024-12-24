console.log('Happy developing ✨')

const hoverElt = document.querySelector(".hover-elt")
const navLink = document.querySelector(".navbar > ul")
const navLinks = Array.from(document.querySelectorAll(".navbar > ul > li"))

if(!hoverElt || !navLink){
    throw new Error("Element not found")
}

function handleHover(e){
    const navLinkX = navLink.getBoundingClientRect().x
    const eltLink = e.target.getBoundingClientRect().x
    const posLeft = eltLink - navLinkX
    hoverElt.style.opacity = "1"
    hoverElt.style.left = `${posLeft}px`
    hoverElt.style.width = `${e.target.offsetWidth}px`
}

function handleLeave(){
    hoverElt.style.opacity = "0"
}

navLinks.forEach((elt) => {
    elt.addEventListener("mouseenter", handleHover)
    elt.addEventListener("mouseleave", handleLeave)
})

