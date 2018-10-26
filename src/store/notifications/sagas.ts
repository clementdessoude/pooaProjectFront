import { call, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes, NOTIFICATIONS_ACTIONS } from './actions';
import { Api } from './api';


export function* fetchUserWatchlist(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fetchNotifications, params.payload.userId);
        const data = rep.data;
        // // add missing value from api
        yield put(NOTIFICATIONS_ACTIONS.fetchUserNotificationsSuccess({notifications: data}));
    } catch (error) {
        yield put(NOTIFICATIONS_ACTIONS.fetchUserNotificationsFailure());
    }
}

export function* notificationsSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_USER_NOTIFICATIONS_REQUEST, fetchUserWatchlist);
}
