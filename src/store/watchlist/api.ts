import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const addSerieToWatchList = async (serieId: string, userId: number) => {
    const url = BASE_API_URL + `/watchlist/userId/${userId}/serieId/${serieId}`;
    const rep = await axios.get(url);
    // tslint:disable-next-line:no-console
    console.log('api watchlist add', rep);
    return rep;
}

export const Api = {
    addSerieToWatchList,
};