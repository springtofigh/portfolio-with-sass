// ===  Header Styles On Scroll  ===
const navbarScroll = () => {
    const navbar = document.querySelector(".nav-container");
    this.scrollY >= 50 ?  navbar.classList.add('navbarScrolled') : navbar.classList.remove('navbarScrolled');
}

window.addEventListener('scroll', navbarScroll);

// ===  Slider For Skills Section  ===
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    autoplay: {
        enabled: true,
        delay: 5000
    },
});

// ===  Project Section Active Style  ===
const tabHover = document.querySelector(".tabs div");
console.log(tabHover);
tabHover.addEventListener("click" , () => {
    tabHover.classList.toggle("tab-hover")
})