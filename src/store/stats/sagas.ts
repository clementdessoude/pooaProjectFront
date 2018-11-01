import { call, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes, STATS_ACTIONS } from './actions';
import { Api } from './api';

export function* fetchStatsRequest(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fetchStatsRequest, params.payload.userId);
        const data = rep.data as any;
        yield put(STATS_ACTIONS.fetchStatsSuccess(data));
    } catch (error) {
        yield put(STATS_ACTIONS.fetchStatsFailure());
    }
}

export function* statsSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_STATS_REQUEST, fetchStatsRequest);

}
