// Using https://rawg.io/apidocs for the API KEY
// If the API KEY has expired generate new
const API_KEY = 'b131ee238d874fcbb08d6a24abd6f6d5';
const BASE_API_URL = `https://api.rawg.io/api/games`;
const BASE_API_URL_KEY = `https://api.rawg.io/api/games?key=${API_KEY}`;

// Games endpoints
const allGames = `${BASE_API_URL_KEY}`;
const mostPopularGames = `${BASE_API_URL_KEY}&ordering=-rating`;
const topEightGames = `${BASE_API_URL_KEY}&ordering=-rating&page_size=8`;
const gameDetails = (gameId) => `${BASE_API_URL}/${gameId}?key=${API_KEY}`;
const gameImages = (gameId) => `${BASE_API_URL}/${gameId}/screenshots?key=${API_KEY}`;
const relatedGames = (gameId) => `${BASE_API_URL}/${gameId}/game-series?key=${API_KEY}`;
const allGamesPaginated = (page, pageSize) => `${BASE_API_URL_KEY}&page=${page}&page_size=${pageSize}`;
const searchedGames = (query, page, pageSize) => `${BASE_API_URL_KEY}&search=${query}&page=${page}&page_size=${pageSize}`;
const allPlatforms = `https://api.rawg.io/api/platforms?key=${API_KEY}`;
const allGenres = `https://api.rawg.io/api/genres?key=${API_KEY}`;

export const endpoints = {
    allGames,
    mostPopularGames,
    topEightGames,
    gameDetails,
    gameImages,
    relatedGames,
    allGamesPaginated,
    searchedGames,
    allPlatforms,
    allGenres
};