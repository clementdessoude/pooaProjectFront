import { call, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes, WATCHLIST_ACTIONS } from './actions';
import { Api } from './api';


export function* addSerieToWatchlistRequest(params: any): Iterator<any> {
    try {
        yield call(Api.addSerieToWatchList, params.payload.serieId, params.payload.userId);
        yield put(WATCHLIST_ACTIONS.addSerieToWatchlistSuccess());
    } catch (error) {
        yield put(WATCHLIST_ACTIONS.addSerieToWatchlistFailure());
    }
}

export function* watchlistSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.ADD_SERIE_TO_WATCHLIST_REQUEST, addSerieToWatchlistRequest);
}
