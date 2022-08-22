new Swiper(".swiper-container", {
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween:169, 
  coverflowEffect: {
    rotate: 0,
    stretch: 2,
    depth: 80,
    modifier: 1,
    slideShadows: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});
