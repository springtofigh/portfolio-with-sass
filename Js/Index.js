// ===  Header Styles On Scroll  ===
const navbarScroll = () => {
    const navbar = document.querySelector(".nav-container");
    this.scrollY >= 50 ?  navbar.classList.add('navbarScrolled') : navbar.classList.remove('navbarScrolled');
}

window.addEventListener('scroll', navbarScroll);

// ===  Slider For Skills Section  ===
const swiper = new Swiper(".swiper", {
  breakpoints: {
    // when window width is >= 320px
    320: {
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
    },
    // when window width is >= 768px
    768: {
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
    },
  }
});

const allImages = [ "./assets/img/project-img3.png" , "./assets/img/project-img2.png" , "./assets/img/project-img1.png" , "./assets/img/project-img3.png" , "./assets/img/project-img2.png" , "./assets/img/project-img1.png"];
console.log(allImages);

// ===  Project Section Active Style  ===
const tabHover = document.querySelectorAll(".tab");
const tabOne = document.querySelector(".tab-one");
const tabTow = document.querySelector(".tab-two");
const textTab =  document.querySelector(".tab-two-text");
const proImages = document.querySelectorAll(".projects-images");
console.log(proImages);

tabHover.forEach(item => item.addEventListener("click" , activeTab));

function activeTab() {
    tabHover.forEach(item => item.classList.remove("tab-hover"));
    this.classList.add("tab-hover");
}

tabTow.addEventListener("click" , () => {
    textTab.style.display = "block";
    proImages.style.display = "none";
})

tabOne.addEventListener("click" , () => {
    textTab.style.display = "none";
})

// ===  Hamburger Menu  ===
function myFunction() {
    const hideMenu = document.querySelector(".icon-button-container");
    const hideMenuItems = document.querySelector(".items-container")
    if (hideMenu.style.display === "none" && hideMenuItems.style.display === "none" ) {
      hideMenu.style.display = "flex";
      hideMenuItems .style.display = "flex";
    } else {
      hideMenu.style.display = "none";
      hideMenuItems .style.display = "none";
    }
  }

// 
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#myElement", {
      strings: [" سلام! من بهار هستم توسعه دهنده فرانت اند  "],
      speed: 150,
    }).go();
  });