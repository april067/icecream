!function(){var e={logo:document.querySelector("[data-logo]"),menuBtn:document.querySelector("[data-menu-toggle]"),navigation:document.querySelector("[data-menu]"),closeMenuItems:document.querySelectorAll("[data-menu-link]"),headerBtn:document.querySelector("[data-button]"),headerContainer:document.querySelector("[data-container]")},t="open",n="close",o=t;function a(){e.menuBtn.classList.contains(t)?(e.menuBtn.classList.remove(o),o=n):e.menuBtn.classList.contains(n)&&(e.menuBtn.classList.remove(o),o=t),e.menuBtn.offsetWidth,e.menuBtn.classList.add(o)}function c(){e.menuBtn.classList.toggle("data-menu-open"),e.menuBtn.classList.toggle("data-menu-close"),e.menuBtn.classList.contains("data-menu-open")&&e.navigation.appendChild(e.headerBtn),e.menuBtn.classList.contains("data-menu-close")&&e.headerContainer.appendChild(e.headerBtn)}function s(){document.body.classList.remove("menu-open"),e.logo.classList.remove("isChangedAccentColor"),e.navigation.classList.remove("isMobOpen"),a(),c()}e.menuBtn.addEventListener("click",(function(){document.body.classList.toggle("menu-open"),e.logo.classList.toggle("isChangedAccentColor"),e.navigation.classList.toggle("isMobOpen"),a(),c()})),e.closeMenuItems.forEach((function(e){return e.addEventListener("click",s)}))}(),function(){var e={aboutModal:document.querySelector("[data-about]"),aboutOpen:document.querySelector("[data-about-open]"),aboutClose:document.querySelector("[data-about-close]"),locationModal:document.querySelector("[data-location]"),locationOpen:document.querySelector("[data-location-open]"),locationClose:document.querySelector("[data-location-close]")};function t(){e.aboutModal.classList.toggle("backdrop__is-hidden"),document.body.classList.toggle("modal-open")}function n(){e.locationModal.classList.toggle("backdrop__is-hidden"),document.body.classList.toggle("modal-open")}e.aboutOpen.addEventListener("click",t),e.aboutClose.addEventListener("click",t),e.locationOpen.addEventListener("click",n),e.locationClose.addEventListener("click",n)}();
//# sourceMappingURL=index.74538534.js.map
