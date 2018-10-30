import { call, put, takeEvery } from 'redux-saga/effects';

import { IEpisode, IGenre, ISeason, ISerie } from '../../interfaces';
import { ActionTypes, SERIES_ACTIONS } from './actions';
import { Api } from './api';

import { BASE_IMG_URL, BASE_IMG_URL_EPISODE, IMG_URL_EMPTY } from '../../const/api.const';


export function* fetchSeries(): Iterator<any> {
    try {
        const rep = yield call(Api.fetchSeries, null);
        let data = rep.data;
        // // add missing value from api
        data = data.map((item: any): ISerie => ({
            description: item.description as string,
            genres: item.genres.map((g: any) => ({...g, id: g.id.toString()})),
            id: item.id,
            imgSrc: BASE_IMG_URL + item.image as string,
            title: item.name as string,
        }));
        yield put(SERIES_ACTIONS.fecthSeriesSuccess({series: data}));
    } catch (error) {
        yield put(SERIES_ACTIONS.fecthSeriesFailure());
    }
}

export function* fetchSeasons(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fetchSeasons, params.payload.serieId);
        let data = rep.data;
        // // add missing value from api
        data = data.map((item: any): ISeason => ({
            episodes: item.episodes.map((episode: any) => ({...episode, 
                    id: episode.id.toString(),
                    imgSrc: episode.imageURL ? BASE_IMG_URL_EPISODE + episode.imageURL : IMG_URL_EMPTY}))
                .sort((a: IEpisode, b: IEpisode) => {
                    return a.episodeNumber > b.episodeNumber ? 1 : a.episodeNumber === b.episodeNumber ? 0 : -1
                }),
            id: (item.id as number).toString(),
            imgSrc: BASE_IMG_URL + item.image as string,
            name: item.name as string,
            number: item.seasonNumber,
        }));
        yield put(SERIES_ACTIONS.fecthSeasonsSuccess({seasons: data}));
    } catch (error) {
        yield put(SERIES_ACTIONS.fecthSeasonsFailure());
    }
}

export function* fetchGenres(): Iterator<any> {
    try {
        const rep = yield call(Api.fetchGenres);
        let data = rep.data;
        // // add missing value from api
        data = data.map((item: any): IGenre => ({
            id: (item.id as number).toString(),
            name: item.name as string,
        }));
        yield put(SERIES_ACTIONS.fecthGenresSuccess({genre: data}));
    } catch (error) {
        yield put(SERIES_ACTIONS.fecthGenresFailure());
    }
}

export function* fetchSeriesPref(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fetchRecommandedSeries, params.payload.genreScore);
        let data = rep.data.map((item: any) => item.serie);
        // // add missing value from api
        data = data.map((item: any): ISerie => ({
            description: item.description as string,
            genres: item.genres.map((g: any) => ({...g, id: g.id.toString()})),
            id: item.id,
            imgSrc: BASE_IMG_URL + item.image as string,
            title: item.name as string,
        }));
        yield put(SERIES_ACTIONS.fecthSeriesPrefSuccess({recommandedSeries: data}));
    } catch (error) {
        yield put(SERIES_ACTIONS.fecthSeriesPrefFailure());
    }
}

export function* seriesSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_SERIES_REQUEST, fetchSeries);
    yield takeEvery(ActionTypes.FETCH_SEASONS_REQUEST, fetchSeasons);
    yield takeEvery(ActionTypes.FETCH_GENRES_REQUEST, fetchGenres);
    yield takeEvery(ActionTypes.FETCH_SERIES_PREF_REQUEST, fetchSeriesPref);
}
