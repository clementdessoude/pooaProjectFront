import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const fetchSeries = async () => {

    const url = BASE_API_URL + '/serie/all';
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api fetch series', rep);
    return rep;
}

const fetchSeasons = async (serieId: string) => {

    const url = BASE_API_URL + `/season/serie-id/${serieId}`;
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api fetch seasons', rep);
    return rep;
}

const addSerieToWatchList = async (serieId: string, userId: number) => {
    const url = BASE_API_URL + `/watchlist/userId/${userId}/serieId/${serieId}`;
    const rep = await axios.get(url);
    console.log('api watchlist add', rep);
    return rep;
}

export const Api = {
    addSerieToWatchList,
    fetchSeasons,
    fetchSeries,
};