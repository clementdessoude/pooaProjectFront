import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const addSerieToWatchList = async (serieId: string, userId: string) => {
    const url = BASE_API_URL + `/watchlist/add/userId/${userId}/serieId/${serieId}`;
    const rep = await axios.get(url);
    return rep;
}

const removeSerieOfWatchList = async (serieId: string, userId: string) => {
    const url = BASE_API_URL + `/watchlist/remove/userId/${userId}/serieId/${serieId}`;
    const rep = await axios.get(url);
    return rep;
}

const fecthUserWatchlist = async (userId: string) => {
    const url = BASE_API_URL + `/watchlist/series/userId/${userId}`;
    const rep = await axios.get(url);
    return rep;
}

export const Api = {
    addSerieToWatchList,
    fecthUserWatchlist,
    removeSerieOfWatchList,
};