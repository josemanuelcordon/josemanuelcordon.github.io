const nav_button = document.getElementById('hamburguesa')
const nav_bar = document.getElementById('navbar')
const cruz = document.getElementById('cruz')
const hamburguesa = document.getElementById('hamburguesa1')
const page = document.getElementById('inner-page-wrapper')
const portfolioBtn = document.getElementById('portfolioBtn')
const homeBtn = document.getElementById('homeBtn')
const header = document.getElementById('header')
const logo_negro = document.getElementById('logo-negro')
const titulo_biografia = document.getElementById('titulo')
const biografia = document.getElementById('biografia')


nav_button.addEventListener('click', () => {
    nav_bar.classList.toggle('navbar-active')
    hamburguesa.classList.toggle('hamburguesa-blanca-unactive')
    cruz.classList.toggle('cruz-blanca-active')
    page.classList.toggle('full-screen')
    page.classList.toggle('notfull')
})

homeBtn.addEventListener('click', () => {
    hamburguesa.classList.remove('hamburguesa-negra')
    cruz.classList.remove('cruz-negra')
    header.classList.remove('header-blanco')
    logo_negro.style.display = "block"
    nav_bar.classList.remove('navbar_blanca')
    homeBtn.classList.add('texto-blanco')
    homeBtn.classList.remove('texto-negro')
    portfolioBtn.classList.add('texto-blanco')
    portfolioBtn.classList.remove('texto-negro')
    skillsBtn.classList.add('texto-blanco')
    skillsBtn.classList.remove('texto-negro')
    projectsBtn.classList.add('texto-blanco')
    projectsBtn.classList.remove('texto-negro')
})

portfolioBtn.addEventListener('click', () => {
    hamburguesa.classList.add('hamburguesa-negra')
    cruz.classList.add('cruz-negra')
    header.classList.add('header-blanco')
    logo_negro.style.display = "none"
    nav_bar.classList.add('navbar_blanca')
    homeBtn.classList.remove('texto-blanco')
    homeBtn.classList.add('texto-negro')
    portfolioBtn.classList.remove('texto-blanco')
    portfolioBtn.classList.add('texto-negro')
    skillsBtn.classList.remove('texto-blanco')
    skillsBtn.classList.add('texto-negro')
    projectsBtn.classList.remove('texto-blanco')
    projectsBtn.classList.add('texto-negro')
})

skillsBtn.addEventListener('click', () => {
    hamburguesa.classList.remove('hamburguesa-negra')
    cruz.classList.remove('cruz-negra')
    header.classList.remove('header-blanco')
    logo_negro.style.display = "block"
    nav_bar.classList.remove('navbar_blanca')
    homeBtn.classList.add('texto-blanco')
    homeBtn.classList.remove('texto-negro')
    portfolioBtn.classList.add('texto-blanco')
    portfolioBtn.classList.remove('texto-negro')
    skillsBtn.classList.add('texto-blanco')
    skillsBtn.classList.remove('texto-negro')
    projectsBtn.classList.add('texto-blanco')
    projectsBtn.classList.remove('texto-negro')
})

projectsBtn.addEventListener('click', () => {
    hamburguesa.classList.add('hamburguesa-negra')
    cruz.classList.add('cruz-negra')
    header.classList.add('header-blanco')
    logo_negro.style.display = "none"
    nav_bar.classList.add('navbar_blanca')
    homeBtn.classList.remove('texto-blanco')
    homeBtn.classList.add('texto-negro')
    portfolioBtn.classList.remove('texto-blanco')
    portfolioBtn.classList.add('texto-negro')
    skillsBtn.classList.remove('texto-blanco')
    skillsBtn.classList.add('texto-negro')
    projectsBtn.classList.remove('texto-blanco')
    projectsBtn.classList.add('texto-negro')
})

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 90,
        slideShadows: false,
  },
  freeMode: {
    enabled: true,
    sticky: true,
  },
  controller: {
    inverse: true,
  },
})

const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);
  
