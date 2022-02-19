import { getPopular, getTop, getTrends } from "./services";
import renderCards from "./renderCards";


const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');

const getNav = document.querySelectorAll('.get-nav');


const menuLink = () => {
	getNav.forEach(link => {
		link.addEventListener('click', evt => {

			const target = evt.target.closest('.get-nav__link');

			if (target) {
				evt.preventDefault();
				filmWeek.style.display = 'none';
				title.textContent = target.textContent;

				if (target.classList.contains('get-nav__link--triends')) {
					getTrends()
						.then(data => renderCards(data))
				};

				if (target.classList.contains('get-nav__link--popular-movies')) {
					getPopular('movie')
						.then(data => renderCards(data, 'movie'))
				};

				if (target.classList.contains('get-nav__link--popular-tv')) {
					getPopular('tv')
						.then(data => renderCards(data, 'tv'))
				};

				if (target.classList.contains('get-nav__link--top-movies')) {
					getTop('movie')
						.then(data => renderCards(data, 'movie'))
				};

				if (target.classList.contains('get-nav__link--top-tv')) {
					getTop('tv')
						.then(data => renderCards(data, 'tv'))
				};

			}
		})
	})
}


export default menuLink;