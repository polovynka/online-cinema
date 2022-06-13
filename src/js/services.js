const API_KEY = '67a5c365ff4299efc12a542bbae82e9d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';


const getData = url =>
	fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			throw `Возникла ошибка ${response.status}`;
		})
		.catch(err => console.error(err));

let url = '';

export const getPagination = async (page) => {
	return await getData(url + `&page=${page}`);
};

export const getTrends = async (type = 'all', period = 'week', page = 1) => {
	url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}`;
	return await getData(url + `&page=${page}`);
};

export const getPopular = async (type, page = 1) => {
	url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANG}`;
	return await getData(url + `&page=${page}`);
};

export const getTop = async (type, page = 1) => {
	url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANG}`;
	return await getData(url + `&page=${page}`);
};

export const getVideo = async (type, id) => {
	if (type === 'person') return null;//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
	const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANG}`;
	return await getData(url);
};

export const search = async (query, page = 1) => {
	url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANG}&query=${query}&include_adult=false`;
	return await getData(url + `&page=${page}`);
};
