import { call, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes, SERIES_ACTIONS } from './actions';
import { Api } from './api';

export function* loginRequest(): Iterator<any> {
    try {
        const rep = yield call(Api.loginRequest, null);
        const data = rep.data as any;
        // // add missing value from api
        // data = data.map((item: any): ISerie => ({
        //     description: item.description as string,
        //     id: item.id,
        //     imgSrc: BASE_IMG_URL + item.image as string,
        //     title: item.name as string,
        // }));
        yield put(SERIES_ACTIONS.loginSuccess(data));
    } catch (error) {
        yield put(SERIES_ACTIONS.loginFailure());
    }
}

export function* seriesSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.LOGIN_REQUEST, loginRequest);
}
