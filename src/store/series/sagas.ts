import { call, put, takeEvery } from 'redux-saga/effects';

// import { ISerie } from '../../interfaces';
import { ActionTypes, MISSION_ACTIONS } from './actions';
import { Api } from './api';

export function* fetchSeries(): Iterator<any> {
    try {
        const rep = yield call(Api.fetchSeries, null);
        const data = rep.data;
        // add missing value from api
        // data = data.map((item: any): IMission => 
        //     ({title: item.title, 
        //         description: item.description,
        //         id: item.id,
        //         difficulty: 5, 
        //         adoptionTime: 3, 
        //         gain: item.values_per_savings.map((saving: any) => ({
        //             value: Math.floor(saving.values), icon: 'star'
        //         })),
        //         // [{value: 10, icon: 'star'},{value: 8, icon: 'map'}],
        //         imgSrc: "https://res.cloudinary.com/gesteco/image/upload/v1535568316/samples/landscapes/nature-mountains.jpg"})
        // );
        yield put(MISSION_ACTIONS.fecthSeriesSuccess({series: data}));
    } catch (error) {
        yield put(MISSION_ACTIONS.fecthSeriesFailure());
    }
}

export function* seriesSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_SERIES_REQUEST, fetchSeries);
}
