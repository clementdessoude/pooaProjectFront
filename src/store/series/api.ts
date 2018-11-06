import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';
import { IGenre } from '../../interfaces';

const fetchSeries = async (pageNumber: number, seriesPerPage: number) => {

    const url = BASE_API_URL + '/serie/all';
    const rep = await axios.get(url, {params: {size: seriesPerPage, page: pageNumber}});
    return rep;
}

const fetchSeriesByName = async (name: string) => {
    const url = BASE_API_URL + `/serie/name`;
    const rep = await axios.get(url, {params: {name}});
    return rep;
}

const fetchRecommandedSeries = async (genreScore: Array<{genre: IGenre, score: number}>) => {

    const url = BASE_API_URL + '/serie/preferences';
    const reqParam: {[x: string]: number} = {};
    genreScore.map(item => {
        reqParam[item.genre.id] = item.score;
    });
    const rep = await axios.post(url, reqParam);
    return rep;
}

const fetchSeasons = async (serieId: string) => {

    const url = BASE_API_URL + `/season/serieId/${serieId}`;
    const rep = await axios.get(url);
    return rep;
}

const fetchGenres = async () => {

    const url = BASE_API_URL + `/genre/all`;
    const rep = await axios.get(url);
    return rep;
}

const fetchEpisodeInfoUser = async(userId: string, serieId: string) => {
    const url = BASE_API_URL + `/episode/extrainformations`;
    const rep = axios.post(url, {userId, serieId});
    return rep;
}

const changeEpisodeUserStatus = async(userId: string, episodeId: string, isSeen: boolean, rate: number) => {
    const url = BASE_API_URL + `/episode/update`;
    const rep = axios.post(url, {userId, episodeId, seen: isSeen, rate })
    return rep;
}

export const Api = {
    changeEpisodeUserStatus,
    fetchEpisodeInfoUser,
    fetchGenres,
    fetchRecommandedSeries,
    fetchSeasons,
    fetchSeries,
    fetchSeriesByName,
};
