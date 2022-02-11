
const toggleMenu = (nav, active) => {

	nav.classList.toggle(active);
};


const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {

	const burgerBtn = document.querySelector(openBtn);
	const navigation = document.querySelector(menu);
	const naviClose = document.querySelectorAll(closeTrigger);

	burgerBtn.addEventListener('click', () => {

		toggleMenu(navigation, classActiveMenu)
	});

	naviClose.forEach(item => {

		item.addEventListener('click', () => {

			toggleMenu(navigation, classActiveMenu);
		});
	});


};

export default slideMenu;