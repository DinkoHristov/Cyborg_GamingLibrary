const BASE_URL = `http://localhost:5173`;

// Using https://rawg.io/apidocs for the API KEY
// If the API KEY has expired generate new
const API_KEY = '1a51c5cb277b419c85ee0870684fbba7';
const BASE_API_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

// User-Auth endpoints
const login = `${BASE_URL}/users/login`;
const register = `${BASE_URL}/users/register`;
const logout = `${BASE_URL}/users/logout`;

// Games endpoints
const allGames = `${BASE_API_URL}`;
const mostPopularGames = `${BASE_API_URL}&ordering=-rating`;
const topEightGames = `${BASE_API_URL}&ordering=-rating&page_size=8`;

export const endpoints = {
    login,
    register,
    logout,
    allGames,
    mostPopularGames,
    topEightGames
};