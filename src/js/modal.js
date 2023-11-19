(() => {
  const refs = {
    openModalAbout: document.querySelector('[data-modal-about]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalAbout.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop__is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
