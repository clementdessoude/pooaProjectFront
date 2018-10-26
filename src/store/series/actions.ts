import { ActionCreatorsMapObject } from 'redux';
import { ISeason, ISerie } from '../../interfaces';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    FETCH_SERIES_REQUEST = 'FETCH_SERIES_REQUEST',
    FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS',
    FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE',

    FETCH_SEASONS_REQUEST = 'FETCH_SEASONS_REQUEST',
    FETCH_SEASONS_SUCCESS = 'FETCH_SEASONS_SUCCESS',
    FETCH_SEASONS_FAILURE = 'FETCH_SEASONS_FAILURE',

    SET_CURRENT_SERIE = 'SET_CURRENT_SERIE',
}

export interface IFetchSeriesSuccessPayload {
    series: ISerie[];
}

export interface ISeriedetailsRequestPayload {
    serie: ISerie;
}


export interface IFetchSeasonsSuccessPayload {
    seasons: ISeason[];
}

export interface IFetchSeasonsRequestPayload {
    serieId: string;
}

export const SERIES_ACTIONS = {
    fecthSeriesFailure: () => createAction(ActionTypes.FETCH_SERIES_FAILURE),
    fecthSeriesSuccess: (payload: IFetchSeriesSuccessPayload) => createAction(ActionTypes.FETCH_SERIES_SUCCESS, payload),
    fetchSeriesRequest: () => createAction(ActionTypes.FETCH_SERIES_REQUEST),

    fecthSeasonsFailure: () => createAction(ActionTypes.FETCH_SEASONS_FAILURE),
    fecthSeasonsSuccess: (payload: IFetchSeasonsSuccessPayload) => createAction(ActionTypes.FETCH_SEASONS_SUCCESS, payload),
    fetchSeasonsRequest: (payload: IFetchSeasonsRequestPayload) => createAction(ActionTypes.FETCH_SEASONS_REQUEST, payload),

    serieDetailsRequest: (payload: ISeriedetailsRequestPayload) => createAction(ActionTypes.SET_CURRENT_SERIE, payload),

}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SERIES_ACTIONS>;