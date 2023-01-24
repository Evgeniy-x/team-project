// HEADER-BURGER-MENU //

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


// Swiper //

document.addEventListener('DOMContentLoaded', function () { 
  (function () {
    const swiper = new Swiper('.customers-swiper', {
      loop: true,
      autoHeight: true,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      keyboard: {
      enable: true,
      onlyInViewpot: true,
      pageUpDown: true
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
          
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
          
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },

       // animation speed
      speed: 500,
      // slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      effect: 'slide',
      
    });
  })();
});
