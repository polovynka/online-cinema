import { getTriends, getVideo } from "./services";
import renderCards from "./renderCards";

const filmWeek = document.querySelector('.film-week');

const firstRender = (data, video) => {
	const { key } = video;

	filmWeek.innerHTML = `
	<div class="container film-week__container" data-rating="${data.vote_average || '-'}">
		<div class="film-week__poster-wrapper">
                    <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}" alt="постер ${data.title ?? data.name}">
                    <p class="film-week__title--origin">${data.original_title ?? data.original_name}</p>
                </div>
                <h2 class="film-week__title">${data.title ?? data.name}</h2>
			${key ?
			`<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>`
			: ''}
            </div>
	`
};


const renderVideo = async () => {
	const data = await getTriends();

	const [firstCard, ...otherCards] = data.results;

	otherCards.length = 16;

	const video = await getVideo(firstCard.id, firstCard.media_type);

	firstRender(firstCard, video.results[2]);
	renderCards(otherCards);

};

export default renderVideo;