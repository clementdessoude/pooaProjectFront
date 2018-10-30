import { call, put, takeEvery } from 'redux-saga/effects';

import { BASE_IMG_URL } from '../../const/api.const';
import { ISerie } from '../../interfaces';
import { ActionTypes, WATCHLIST_ACTIONS } from './actions';
import { Api } from './api';


export function* addSerieToWatchlistRequest(params: any): Iterator<any> {
    try {
        yield call(Api.addSerieToWatchList, params.payload.serieId, params.payload.userId);
        yield put(WATCHLIST_ACTIONS.addSerieToWatchlistSuccess());
        yield put(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId: params.payload.userId}));
    } catch (error) {
        yield put(WATCHLIST_ACTIONS.addSerieToWatchlistFailure());
    }
}

export function* fetchUserWatchlist(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fecthUserWatchlist, params.payload.userId);
        let data = rep.data;
        // // add missing value from api
        data = data.map((item: any): ISerie => ({
            description: item.description as string,
            genres: item.genres.map((g: any) => ({...g, id: g.id.toString()})),
            id: item.id,
            imgSrc: BASE_IMG_URL + item.image as string,
            title: item.name as string,
        }));
        yield put(WATCHLIST_ACTIONS.fetchUserWatchlistSuccess({series: data}));
    } catch (error) {
        yield put(WATCHLIST_ACTIONS.fetchUserWatchlistFailure());
    }
}

export function* removeSerieOfWatchlistRequest(params: any): Iterator<any> {
    try {
        yield call(Api.removeSerieOfWatchList, params.payload.serieId, params.payload.userId);
        yield put(WATCHLIST_ACTIONS.removeSerieOfWatchlistSuccess());
        yield put(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId: params.payload.userId}));
    } catch (error) {
        yield put(WATCHLIST_ACTIONS.removeSerieOfWatchlistFailure());
    }
}

export function* watchlistSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.ADD_SERIE_TO_WATCHLIST_REQUEST, addSerieToWatchlistRequest);
    yield takeEvery(ActionTypes.FETCH_USER_WATCHLIST_REQUEST, fetchUserWatchlist);
    yield takeEvery(ActionTypes.REMOVE_SERIE_OF_WATCHLIST_REQUEST, removeSerieOfWatchlistRequest);
}
