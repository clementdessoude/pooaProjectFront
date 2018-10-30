import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';
import { IGenre } from '../../interfaces';

const fetchSeries = async () => {

    const url = BASE_API_URL + '/serie/all';
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api fetch series', rep);
    return rep;
}

const fetchRecommandedSeries = async (genreScore: Array<{genre: IGenre, score: number}>) => {

    const url = BASE_API_URL + '/serie/preferences';
    // tslint:disable:no-console
    const reqParam: {[x: string]: number} = {};
    genreScore.map(item => {
        reqParam[item.genre.id] = item.score;
    });
    console.log('api fetch series preferences', reqParam);
    const rep = await axios.post(url, reqParam);
    return rep;
}

const fetchSeasons = async (serieId: string) => {

    const url = BASE_API_URL + `/season/serie-id/${serieId}`;
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api fetch seasons', rep);
    return rep;
}

const fetchGenres = async () => {

    const url = BASE_API_URL + `/genre/all`;
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api fetch genre', rep);
    return rep;
}

// const fetchEpisodes = async (seasonId: string) => {

//     const url = BASE_API_URL + `/episode/season-id/${seasonId}`;
//     // tslint:disable:no-console
//     const rep = await axios.get(url);
//     console.log('api fetch episode for season id', seasonId, rep);
//     return rep;
// }


// const addSerieToWatchList = async (serieId: string, userId: number) => {
//     const url = BASE_API_URL + `/watchlist/userId/${userId}/serieId/${serieId}`;
//     const rep = await axios.get(url);
//     console.log('api watchlist add', rep);
//     return rep;
// }

export const Api = {
    // addSerieToWatchList,
    // fetchEpisodes,
    fetchGenres,
    fetchRecommandedSeries,
    fetchSeasons,
    fetchSeries,
};