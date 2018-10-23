import { Actions, ActionTypes } from './actions';

import { ISeriesState } from '../../interfaces';

// export function serieReducer(state : IMissionState = {}, action: Actions) : IMissionState {
export function serieReducer(state : ISeriesState  = {}, action: Actions): ISeriesState {
    switch (action.type) {
        // SERIES fetch
        case ActionTypes.FETCH_SERIES_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_SERIES_SUCCESS:
            return {...state, series: action.payload ? action.payload.series : []};
        case ActionTypes.FETCH_SERIES_FAILURE:
            return {...state, };

        // SEASONS fetch
        case ActionTypes.FETCH_SEASONS_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_SEASONS_SUCCESS:
            return {...state, seasonsSerieDetails: action.payload ? action.payload.seasons : []};
        case ActionTypes.FETCH_SEASONS_FAILURE:
            return {...state, };

        // SERIE Details
        case ActionTypes.SET_CURRENT_SERIE:
            return {...state, serieDetails: action.payload ? action.payload.serie : undefined };

        default:
            return state;
    }
}