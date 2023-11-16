(() => {
  const refs = {
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
    refs.navigation.classList.toggle('isMobOpen');

    document.body.classList.toggle('menu-open');
    switchingBurger();
    switchingHeaderButton();
  }

  function closeMenu() {
    refs.navigation.classList.remove('isMobOpen');
    refs.headerContainer.appendChild(refs.headerBtn);
    document.body.classList.remove('menu-open');
    switchingBurger();
    switchingHeaderButton();
  }
})();
