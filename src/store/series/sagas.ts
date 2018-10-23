import { call, put, takeEvery } from 'redux-saga/effects';

import { ISeason, ISerie } from '../../interfaces';
import { ActionTypes, SERIES_ACTIONS } from './actions';
import { Api } from './api';

import { BASE_IMG_URL } from '../../const/api.const';


export function* fetchSeries(): Iterator<any> {
    try {
        const rep = yield call(Api.fetchSeries, null);
        let data = rep.data;
        // // add missing value from api
        data = data.map((item: any): ISerie => ({
            description: item.description as string,
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
            id: item.id,
            imgSrc: BASE_IMG_URL + item.image as string,
            name: item.name as string,
            number: 4
        }));
        yield put(SERIES_ACTIONS.fecthSeasonsSuccess({seasons: data}));
    } catch (error) {
        yield put(SERIES_ACTIONS.fecthSeasonsFailure());
    }
}

export function* addSerieToWatchlistRequest(params: any): Iterator<any> {
    try {
        yield call(Api.addSerieToWatchList, params.payload.serieId, params.payload.userId);
        yield put(SERIES_ACTIONS.addSerieToWatchlistSuccess());
    } catch (error) {
        yield put(SERIES_ACTIONS.addSerieToWatchlistFailure());
    }
}

export function* seriesSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_SERIES_REQUEST, fetchSeries);
    yield takeEvery(ActionTypes.ADD_SERIE_TO_WATCHLIST_REQUEST, addSerieToWatchlistRequest);
    yield takeEvery(ActionTypes.FETCH_SEASONS_REQUEST, fetchSeasons);
}
