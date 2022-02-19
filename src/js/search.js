import { search as getSearch } from "./services";
import renderCards from "./renderCards";

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');

const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

searchForm.addEventListener('submit', evt => {
	evt.preventDefault();

	if (!searchInput.value) return;

	getSearch(searchInput.value)
		.then(data => {
			if (data.results.length) {
				renderCards(data)
			} else {
				throw 'К сожалению ничего не найдено'
			}
		})
		.then(() => {
			filmWeek.remove();
			title.textContent = 'Результаты поиска';
		})
		.catch(err => {
			title.textContent = err;
		})
})

const search = () => {

}

export default search;