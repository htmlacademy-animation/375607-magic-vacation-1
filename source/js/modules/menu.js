export default (callback) => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);
  let content = document.querySelector(`.js-page-content`);
  const TRANSITION_DELAY = 300;
  const LINK_PRIZE = 'prizes';

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (evt) {
      if(menuLinks[i].dataset.href === LINK_PRIZE) {
        evt.preventDefault();
        content.classList.add('transition');

        setTimeout(() => {
          content.classList.remove('transition');
          window.location.href = menuLinks[i].href;

          if(callback !== undefined) {
            callback();
          }
        }, TRANSITION_DELAY);
      }

      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
    });
  }
};
