import { getVideo, getPagination } from "./services";
import withoutPoster from '../images/without-poster.jpg';
const cardList = document.querySelector('.other-films__list');
const buttonWrapper = document.querySelector('.button-pagination');

let paginationType = '';

const renderCards = async (data, mediaType) => {

	cardList.textContent = '';

	paginationType = mediaType;
	buttonWrapper.textContent = '';

	Promise.all(data.results.map(async item => {

		mediaType = item.media_type || mediaType;

		const video = await getVideo(mediaType, item.id);

		const key = video?.results[0]?.key;

		const card = document.createElement('li');
		card.className = 'other-films__item';

		const link = document.createElement('a');
		if (key) link.href = `https://youtu.be/${key}`;
		link.className = 'other-films__link';
		link.dataset.rating = item.vote_average || '-';

		const img = new Image;
		img.className = 'other-films__img';
		img.alt = `постер ${item.title ?? item.name}`;
		img.src = item.poster_path ?
			`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` :
			withoutPoster;

		link.append(img);
		card.append(link);

		return card;
	}))
		.then(cards => cardList.append(...cards))
		.then(() => {
			if (data.total_pages > 1) {

				if (data.page > 1) {
					const buttonLeft = document.createElement('button');
					buttonLeft.classList.add('button-pagination-arrow');
					buttonLeft.dataset.page = data.page - 1;
					buttonLeft.textContent = '<';
					buttonWrapper.append(buttonLeft);
				}

				if (data.page < data.total_pages) {
					const buttonRight = document.createElement('button');
					buttonRight.classList.add('button-pagination-arrow');
					buttonRight.dataset.page = data.page + 1;
					buttonRight.textContent = '>';
					buttonWrapper.append(buttonRight);
				}

				buttonWrapper.style.textAlign = 'center';
				cardList.insertAdjacentElement('afterend', buttonWrapper);
			}
		});
};

buttonWrapper.addEventListener('click', async event => {
	if (event.target.classList.contains('button-pagination-arrow')) {
		const data = await getPagination(event.target.dataset.page)
		renderCards(data, paginationType)
	}
});


export default renderCards;