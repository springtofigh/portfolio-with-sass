// ===  Header Styles On Scroll  ===
const navbarScroll = () => {
    const navbar = document.querySelector(".nav-container");
    this.scrollY >= 50 ?  navbar.classList.add('navbarScrolled') : navbar.classList.remove('navbarScrolled');
}

window.addEventListener('scroll', navbarScroll);

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
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