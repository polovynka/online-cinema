import slideMenu from "./js/menu.js";
import styles from './styles/style.css';
import renderVideo from './js/renderVideo.js';
import menuLink from './js/menuLink.js';
import search from './js/search';

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close',

});

search();
renderVideo();
menuLink();