// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import AccentTypographyBuild from './modules/accept-typography-build';

// init modules
mobileHeight();
slider();
menu(() => {
  setImageForAnimate('#prize1');
});
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animationHomeTitle = new AccentTypographyBuild('.title-intro', 500, 'accept-typography-active', 'all', [[80, 40, 0, 40, 80, 40, 0, 100, 60, 0, 60, 20], [0, 40, 80, 120, 0, 40]]);
const animationHomeDate = new AccentTypographyBuild('.intro__date', 500, 'accept-typography-active', 'all', [[60, 40, 40, 80, 20, 20, 40, 100, 40, 0, 80, 60, 20]], true);
const animationHistoryTitle = new AccentTypographyBuild('.slider__item-title', 500, 'accept-typography-active', 'all', [[80, 40, 0, 40, 80, 40, 0]]);
const animationPrizesTitle = new AccentTypographyBuild('.prizes__title', 500, 'accept-typography-active', 'all', [[80, 40, 0, 40, 80]]);
const animationRulesTitle = new AccentTypographyBuild('.rules__title', 500, 'accept-typography-active', 'all', [[80, 60, 40, 0, 80, 60, 0]]);
const animationGameTitle = new AccentTypographyBuild('.game__title', 500, 'accept-typography-active', 'all', [[80, 40, 0, 40]]);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');

    animationHomeTitle.runAnimation();
    animationHomeDate.runAnimation();
    animationHistoryTitle.runAnimation();
    animationPrizesTitle.runAnimation();
    animationRulesTitle.runAnimation();
    animationGameTitle.runAnimation();
  }, 100);


  setImageForAnimate('#prize1');
});

function setImageForAnimate(name) {
  if (!name) {
    return;
  }
  const image = document.querySelector(name);
  const imageUrl = image.src;
  image.src = `${imageUrl}?${Math.random()}`;
}

