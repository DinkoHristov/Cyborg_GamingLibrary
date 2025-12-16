import { get } from "../utils/requester";
import { endpoints } from "../utils/urls";


export async function getAllGames() {
    const data = await get(endpoints.allGames);
    return data.results;
}

export async function getMostPopularGames() {
    const data = await get(endpoints.mostPopularGames);
    return data.results;
}

export async function getTopEightGames() {
    const data = await get(endpoints.topEightGames);
    return data.results;
}

export async function getGameDetails(gameId) {
    const data = await get(endpoints.gameDetails(gameId));
    return data;
}

export async function getGameImages(gameId) {
    const data = await get(endpoints.gameImages(gameId));
    return data.results;
}

export async function getRelatedGames(gameId) {
    const data = await get(endpoints.relatedGames(gameId));
    return data.results;
}

export async function getAllGamesPaginated(pageNumber = 1, pageSize = 20) {
    const data = await get(endpoints.allGamesPaginated(pageNumber, pageSize));
    return data;
}

export async function getSearchedGames(searchQuery, pageNumber = 1, pageSize = 20) {
    const data = await get(endpoints.searchedGames(searchQuery, pageNumber, pageSize));
    return data;
}