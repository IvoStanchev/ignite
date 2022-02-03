//!environment variables
require('dotenv').config();

//?get time
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};
const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//?format time
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//*Base URL
const base_url = `https://api.rawg.io/api/`;

//*Game endpoint
const gameEndpoint = `games?key=${process.env.REACT_APP_API_KEY}`;

//*final endpoints
const popular_games = `${gameEndpoint}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `${gameEndpoint}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `${gameEndpoint}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//*export final URL
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const gameDetailsURL = (game_id) =>
	`${base_url}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
export const gameScreenshotURL = (game_id) =>
	`${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

export const searchGames = (game_name) =>
	`${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}&page_size=9`;
