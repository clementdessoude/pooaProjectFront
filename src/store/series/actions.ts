import { ActionCreatorsMapObject } from 'redux';
import { ISerie } from '../../interfaces';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    FETCH_SERIES_REQUEST = 'FETCH_SERIES_REQUEST',
    FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS',
    FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE',

    SET_CURRENT_SERIE = 'SET_CURRENT_SERIE',

}

export interface IFetchSeriesSuccessPayload {
    series: ISerie[];
}

export interface ISeriedetailsRequestPayload {
    serie: ISerie;
}

export const SERIES_ACTIONS = {
    fecthSeriesFailure: () => createAction(ActionTypes.FETCH_SERIES_FAILURE),
    fecthSeriesSuccess: (payload: IFetchSeriesSuccessPayload) => createAction(ActionTypes.FETCH_SERIES_SUCCESS, payload),
    fetchSeriesRequest: () => createAction(ActionTypes.FETCH_SERIES_REQUEST),

    serieDetailsRequest: (payload: ISeriedetailsRequestPayload) => createAction(ActionTypes.SET_CURRENT_SERIE, payload),
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SERIES_ACTIONS>;