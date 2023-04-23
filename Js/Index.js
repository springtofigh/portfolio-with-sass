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

// Project Images
const allImages = [ "./assets/img/project-img3.png" , "./assets/img/project-img2.png" , "./assets/img/project-img1.png" , "./assets/img/project-img3.png" , "./assets/img/project-img2.png" , "./assets/img/project-img1.png"];

const parent = document.querySelector(".projects-img");
allImages.forEach(item => {
    const img = document.createElement("img");
    img.setAttribute("src" ,item)
      parent.appendChild(img);
})

// ===  Project Section Active Style  ===
const tabHover = document.querySelectorAll(".tab");
const tabOne = document.querySelector(".tab-one");
const tabTow = document.querySelector(".tab-two");
const tabThree = document.querySelector(".tab-three");
const textTab =  document.querySelector(".tab-two-text");

tabHover.forEach(item => item.addEventListener("click" , activeTab));

function activeTab() {
    tabHover.forEach(item => item.classList.remove("tab-hover"));
    this.classList.add("tab-hover");
}

tabThree.addEventListener("click" , () => {
    textTab.style.display = "block";
    parent.style.display = "none";
})

tabTow.addEventListener("click" , () => {
  textTab.style.display = "none";
  parent.style.display = "none";
})

tabOne.addEventListener("click" , () => {
    textTab.style.display = "none";
    parent.style.display = "grid";
})

// ===  Hamburger Menu  ===
function myMenuFunction() {
  const hideMenu = document.querySelector(".icon-button-container");
  const hideMenuItems = document.querySelector(".items-container");

    if (hideMenuItems.style.display === "none" ) {
      hideMenu.style.display = "flex";
      hideMenuItems .style.display = "flex";
    } else {
      hideMenu.style.display = "none";
      hideMenuItems .style.display = "none";
    }
    // FIX ISSUES THAT NAVBAR ITEMS BECOME HIDE WHEN CHANGING BROWSER WIDTH 
    addEventListener('resize', () => {
      if (window.innerWidth > 768) {
      hideMenu.style.display = "flex";
      hideMenuItems .style.display = "flex";
      } else {
        hideMenu.style.display = "none";
        hideMenuItems .style.display = "none";
      }
    });
  }

  // CLOSE MENU WHEN NAVBAR LINKS ARE CLICKED
  const navbarContainer = document.querySelector('.nav-items');

const linksCloseMenu = (e) => {
  e.target.classList.contains('navbar-link') ? navbarContainer.style.display="none" : navbarContainer.style.display="flex";
}

// TYPE EFFECT 
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#myElement", {
      strings: ["سلام! من بهار هستم توسعه دهنده فرانت اند"],
      speed: 150,
    }).go();
  });