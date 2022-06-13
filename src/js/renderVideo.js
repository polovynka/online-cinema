import { getTrends, getVideo } from "./services";
import renderCards from "./renderCards";

const filmWeek = document.querySelector('.film-week');

const firstRender = (data, { key }) => {

	const {
		vote_average: voteAverage,
		backdrop_path: backdropPath,
		title,
		name,
		original_title: originalTitle,
		original_name: originalName
	} = data;

	filmWeek.innerHTML = `
	<div class="container film-week__container" data-rating="${voteAverage ?? '-'}">
		<div class="film-week__poster-wrapper">
                    <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropPath}" alt="постер ${title ?? name}">
                    <p class="film-week__title--origin">${originalTitle ?? originalName}</p>
                </div>
                <h2 class="film-week__title">${title ?? name}</h2>
			${key ?
			`<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>`
			: ''}
            </div>
	`
};


const renderVideo = async () => {
	const data = await getTrends();


	const [firstCard] = data.results;


	const video = await getVideo(firstCard.media_type, firstCard.id);
	console.log('video: ', video);


	firstRender(firstCard, video.results[0] ?? '');
	renderCards(data);

};

export default renderVideo;