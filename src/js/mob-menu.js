(() => {
  const refs = {
    logo: document.querySelector('[data-logo]'),
    menuBtn: document.querySelector('[data-menu-toggle]'),
    navigation: document.querySelector('[data-menu]'),
    closeMenuItems: document.querySelectorAll('[data-menu-link]'),
    headerBtn: document.querySelector('[data-button]'),
    headerContainer: document.querySelector('[data-container]'),
  };

  const cls = {
    open: 'open',
    close: 'close',
  };
  let btnClass = cls.open;

  refs.menuBtn.addEventListener('click', toggleMenu);

  refs.closeMenuItems.forEach(item =>
    item.addEventListener('click', closeMenu)
  );

  function switchingBurger() {
    if (refs.menuBtn.classList.contains(cls.open)) {
      refs.menuBtn.classList.remove(btnClass);
      btnClass = cls.close;
    } else if (refs.menuBtn.classList.contains(cls.close)) {
      refs.menuBtn.classList.remove(btnClass);
      btnClass = cls.open;
    }

    void refs.menuBtn.offsetWidth;
    refs.menuBtn.classList.add(btnClass);
  }

  function switchingHeaderButton() {
    refs.menuBtn.classList.toggle('data-menu-open');
    refs.menuBtn.classList.toggle('data-menu-close');

    if (refs.menuBtn.classList.contains('data-menu-open')) {
      refs.navigation.appendChild(refs.headerBtn);
    }

    if (refs.menuBtn.classList.contains('data-menu-close')) {
      refs.headerContainer.appendChild(refs.headerBtn);
    }
  }

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.logo.classList.toggle('isChangedAccentColor');
    refs.navigation.classList.toggle('isMobOpen');
    switchingBurger();
    switchingHeaderButton();
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    refs.logo.classList.remove('isChangedAccentColor');
    refs.navigation.classList.remove('isMobOpen');
    switchingBurger();
    switchingHeaderButton();
  }
})();
