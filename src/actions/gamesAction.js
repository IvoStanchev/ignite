import axios from 'axios';
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	searchGames,
} from '../api';

//Action Creator
export const loadGames = () => async (dispatch) => {
	//Fetch data
	const popularData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	const searchGame = await axios.get(searchGames(game_name));

	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchGame.data.results,
		},
	});
};
