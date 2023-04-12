const navbar = document.querySelector('.navbar')
const barr=document.querySelector(".fa-bars")
// console.log(barr);
function scrolling() {
    if (scrollY >= 95) {
        navbar.classList.add("Navbar")
        navbar.classList.add("nav-shadow")
        barr.classList.remove("color-white")
        barr.classList.add("color-black")
    } else {
        navbar.classList.remove("Navbar");
        barr.classList.add("color-white")
        barr.classList.remove("color-black")
        navbar.classList.remove("nav-shadow")

    }
}

 