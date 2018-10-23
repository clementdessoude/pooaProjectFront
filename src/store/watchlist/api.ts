import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const addSerieToWatchList = async (serieId: string, userId: string) => {
    const url = BASE_API_URL + `/add/watchlist/userId/${userId}/serieId/${serieId}`;
    const rep = await axios.get(url);
    // tslint:disable-next-line:no-console
    console.log('api watchlist add', rep);
    return rep;
}

const fecthUserWatchlist = async (userId: string) => {
    const url = BASE_API_URL + `/watchlist/series/userId/${userId}`;
    const rep = await axios.get(url);
    // tslint:disable-next-line:no-console
    console.log('api watchlist get series for user', rep);
    return rep;
}

export const Api = {
    addSerieToWatchList,
    fecthUserWatchlist
};