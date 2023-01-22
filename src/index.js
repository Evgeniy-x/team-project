//<<<<<<< HEAD
//BURGER-MENU

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
//=======
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
//>>>>>>> main
