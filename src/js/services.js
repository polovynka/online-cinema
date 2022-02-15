const API_KEY = '67a5c365ff4299efc12a542bbae82e9d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU'


const getData = url =>
	fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			throw `Возникла ошибка ${response.status}`;
		})
		.catch(err => console.error(err));





export const getTriends = async (type = 'all', period = 'week', page = 1) => {
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
	return await getData(url);
};