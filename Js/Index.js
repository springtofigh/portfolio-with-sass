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
const allImages = ["project-img3.png" , "project-img2.png" , "project-img1.png" , "project-img3.png" , "project-img2.png" , "project-img1.png"];
const projectsImages = document.querySelector('.projects-images');

allImages.forEach(image => {
  const projectsImg = document.createElement("div");
  projectsImg.className = "projects-img";

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const img = document.createElement("img");
  img.setAttribute("src", `../assets/img/${image}`);
  projectsImg.appendChild(img);

  const heading = document.createElement("h4");
  heading.className = 'heading-text';
  heading.textContent = "Business Startup";

  const span = document.createElement("span");
  span.className = 'span-text';
  span.textContent = "Design and Development";

  overlay.appendChild(heading);
  overlay.appendChild(span);

  projectsImages.appendChild(projectsImg);
  projectsImg.appendChild(overlay);
});


// ===  Project Section Active Style  ===
const tabHover = document.querySelectorAll(".tab");
const tabOne = document.querySelector(".tab-one");
const tabTow = document.querySelector(".tab-two");
const tabThree = document.querySelector(".tab-three");
const textTab =  document.querySelector(".tab-two-text");

const projectImageContainer = document.querySelector(".projects-images");

tabHover.forEach(item => item.addEventListener("click" , activeTab));

function activeTab() {
    tabHover.forEach(item => item.classList.remove("tab-hover"));
    this.classList.add("tab-hover");
}

tabThree.addEventListener("click" , () => {
    textTab.style.display = "block";
    projectImageContainer.style.display = "none";
})

tabTow.addEventListener("click" , () => {
  textTab.style.display = "none";
  projectImageContainer.style.display = "none";
})

tabOne.addEventListener("click" , () => {
    textTab.style.display = "none";
    projectImageContainer.style.display = "grid";
})

// ===  Hamburger Menu  ===
  const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.querySelector('.nav-mobile');
const toggleMenu = () => {
  navMobile.classList.toggle("active");
}

menuToggleIcon.addEventListener('click' , toggleMenu);

  // CLOSE MENU WHEN NAVBAR LINKS ARE CLICKED
  const navLinks = document.querySelectorAll('.navbar-link');

  navLinks.forEach(link => link.addEventListener('click' , () => {
    navMobile.classList.toggle("active");
}));

// TYPE EFFECT 
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#myElement", {
      strings: ["سلام! من بهار هستم توسعه دهنده فرانت اند"],
      speed: 150,
    }).go();
  });

// Events
window.onload = function() {
  let imgHero = document.getElementById('heroImage');
  imgHero.classList.add('up-down');
};

// User scroll position and play animation
const contactImgAnimated = document.getElementById('animated-section');
const homeSectionAnimated = document.getElementById('home-img-animated');
const animatedText = document.getElementById('project-txt-animated');


function handleAnimation(element, animaitionClass) {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    element.classList.add(animaitionClass);
  } else {
    element.classList.remove(animaitionClass);
  }
}

function homeImageScroll() {
  handleAnimation(homeSectionAnimated, 'scale-up-center')
}

function textTabScroll() {
  handleAnimation(animatedText, 'text-animate')
}

function contactImgScroll() {
  handleAnimation(contactImgAnimated, 'animate')
}


window.addEventListener('scroll', () => {
  homeImageScroll();
  textTabScroll();
  contactImgScroll();
});