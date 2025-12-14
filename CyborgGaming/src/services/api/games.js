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