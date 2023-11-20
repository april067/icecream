(() => {
  const refs = {
    aboutModal: document.querySelector('[data-about]'),
    aboutOpen: document.querySelector('[data-about-open]'),
    aboutClose: document.querySelector('[data-about-close]'),

    locationModal: document.querySelector('[data-location]'),
    locationOpen: document.querySelector('[data-location-open]'),
    locationClose: document.querySelector('[data-location-close]'),
  };

  refs.aboutOpen.addEventListener('click', toggleAbout);
  refs.aboutClose.addEventListener('click', toggleAbout);

  refs.locationOpen.addEventListener('click', toggleLocation);
  refs.locationClose.addEventListener('click', toggleLocation);

  function toggleAbout() {
    refs.aboutModal.classList.toggle('backdrop__is-hidden');
    document.body.classList.toggle('modal-open');
  }

  function toggleLocation() {
    refs.locationModal.classList.toggle('backdrop__is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
