import slideMenu from "./js/menu.js";
import styles from './styles/style.css';


slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close',

});

