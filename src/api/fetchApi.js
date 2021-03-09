/** @format */

import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b2ef3b866613259d70f57488ddfedf6a';

export const fetchApi = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			appid: API_KEY
		}
	});

	return data;
};
