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

      refs.headerContainer.appendChild(refs.headerBtn);
    } else if (refs.menuBtn.classList.contains(cls.close)) {
      refs.menuBtn.classList.remove(btnClass);
      btnClass = cls.open;

      refs.navigation.appendChild(refs.headerBtn);
    }

    void refs.menuBtn.offsetWidth;
    refs.menuBtn.classList.add(btnClass);
  }

  function toggleMenu() {
    refs.navigation.classList.toggle('isMobOpen');

    document.body.classList.toggle('menu-open');
    switchingBurger();
  }

  function closeMenu() {
    refs.navigation.classList.remove('isMobOpen');
    refs.headerContainer.appendChild(refs.headerBtn);
    document.body.classList.remove('menu-open');
    switchingBurger();
  }
})();
