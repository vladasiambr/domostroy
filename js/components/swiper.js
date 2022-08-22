new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  centeredSlides: false,
  slidesPerView: 1.25,
  spaceBetween: 30
  ,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 75,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 21,
    },
  },
});
