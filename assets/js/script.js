// hamburger menu JS
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.toggle("open");
});


//header sticky JS

const bottomBar = document.querySelector('.header__bottom-bar');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > 150) {

    if (currentScroll < lastScrollTop) {
      // Scroll up → show bar
      bottomBar.classList.remove('hide');
      bottomBar.classList.add('is-fixed');
    } else {
      // Scroll down → hide bar
      bottomBar.classList.add('hide');
    }
    
  } else {
    // Near top → reset everything
    bottomBar.classList.remove('is-fixed', 'hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


//service Tabs JS
// const tabButtons = document.querySelectorAll('.services__tab');
// const tabContents = document.querySelectorAll('.services__main-content-container');

// tabButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Remove active classes
//     tabButtons.forEach(btn => btn.classList.remove('services__tab--active'));
//     tabContents.forEach(content => content.classList.remove('services__main-content-container--active'));

//     // Add active to clicked button
//     button.classList.add('services__tab--active');

//     // Show corresponding content
//     const tabId = button.getAttribute('data-tab');
//     document.getElementById(tabId).classList.add('services__main-content-container--active');
//   });
// });

const tabButtons = document.querySelectorAll('.services__tab');
const tabContents = document.querySelectorAll('.services__main-content-container');
let currentTab = 0; // Track current active tab

// Function to activate a tab by index
function activateTab(index) {
  tabButtons.forEach(btn => btn.classList.remove('services__tab--active'));
  tabContents.forEach(content => content.classList.remove('services__main-content-container--active'));

  tabButtons[index].classList.add('services__tab--active');
  const tabId = tabButtons[index].getAttribute('data-tab');
  document.getElementById(tabId).classList.add('services__main-content-container--active');

  currentTab = index;
}

// Manual tab click
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activateTab(index);
  });
});

// Auto-switch every 5 seconds
setInterval(() => {
  let nextTab = (currentTab + 1) % tabButtons.length;
  activateTab(nextTab);
}, 5000); // 5000ms = 5 seconds





// Doctor Slider Swiper JS
const swiper = new Swiper('.doctors__slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.4, // Show 1 full + part of prev/next
    spaceBetween: 18,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    speed: 700,     // smooth transition speed in milliseconds

    //  Responsive breakpoints
    breakpoints: {
        575: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
        },
        991: {
        slidesPerView: 3,
        spaceBetween: 30
        },
    }
});



// news Slider Swiper JS
const swiper2 = new Swiper('.news__slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination-news',
        clickable: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    speed: 700,     // smooth transition speed in milliseconds

    //  Responsive breakpoints
    breakpoints: {
        575: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        991: {
        slidesPerView: 2,
        spaceBetween: 30
        },
    }
});


// testimonial Slider Swiper JS
const swiper3 = new Swiper('.testimonial__slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination-testimonial',
        clickable: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    speed: 700,     // smooth transition speed in milliseconds
});


// Show Datepicker
document.querySelector('.appointment__form-input-date').addEventListener('click', () => {
  document.getElementById('date').showPicker(); // or use .showPicker() if supported
});