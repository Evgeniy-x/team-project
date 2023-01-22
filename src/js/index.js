document.addEventListener('DOMContentLoaded', function () {
  /* Swiper */
  (function () {
    const swiper = new Swiper('.customers-swiper', {
      loop: true,
      autoHeight: true,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  })();
});
