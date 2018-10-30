import { ActionCreatorsMapObject } from 'redux';
import { IGenre, ISeason, ISerie } from '../../interfaces';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    FETCH_SERIES_REQUEST = 'FETCH_SERIES_REQUEST',
    FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS',
    FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE',

    FETCH_SERIES_PREF_REQUEST = 'FETCH_SERIES_PREF_REQUEST',
    FETCH_SERIES_PREF_SUCCESS = 'FETCH_SERIES_PREF_SUCCESS',
    FETCH_SERIES_PREF_FAILURE = 'FETCH_SERIES_PREF_FAILURE',

    FETCH_GENRES_REQUEST = 'FETCH_GENRE_REQUEST',
    FETCH_GENRES_SUCCESS = 'FETCH_GENRE_SUCCESS',
    FETCH_GENRES_FAILURE = 'FETCH_GENRE_FAILURE',

    FETCH_SEASONS_REQUEST = 'FETCH_SEASONS_REQUEST',
    FETCH_SEASONS_SUCCESS = 'FETCH_SEASONS_SUCCESS',
    FETCH_SEASONS_FAILURE = 'FETCH_SEASONS_FAILURE',

    SET_CURRENT_SERIE = 'SET_CURRENT_SERIE',
}

export const SERIES_ACTIONS = {
    fecthSeriesFailure: () => createAction(ActionTypes.FETCH_SERIES_FAILURE),
    fecthSeriesSuccess: (payload: IFetchSeriesSuccessPayload) => createAction(ActionTypes.FETCH_SERIES_SUCCESS, payload),
    fetchSeriesRequest: () => createAction(ActionTypes.FETCH_SERIES_REQUEST),

    fecthSeriesPrefFailure: () => createAction(ActionTypes.FETCH_SERIES_PREF_FAILURE),
    fecthSeriesPrefSuccess: (payload: IFetchSeriesPrefSuccessPayload) => createAction(ActionTypes.FETCH_SERIES_PREF_SUCCESS, payload),
    fetchSeriesPrefRequest: (payload: IFetchSeriesPrefRequestPayload) => createAction(ActionTypes.FETCH_SERIES_PREF_REQUEST, payload),

    fecthGenresFailure: () => createAction(ActionTypes.FETCH_GENRES_FAILURE),
    fecthGenresSuccess: (payload: IFetchGenresSuccessPayload) => createAction(ActionTypes.FETCH_GENRES_SUCCESS, payload),
    fetchGenresRequest: () => createAction(ActionTypes.FETCH_GENRES_REQUEST),


    fecthSeasonsFailure: () => createAction(ActionTypes.FETCH_SEASONS_FAILURE),
    fecthSeasonsSuccess: (payload: IFetchSeasonsSuccessPayload) => createAction(ActionTypes.FETCH_SEASONS_SUCCESS, payload),
    fetchSeasonsRequest: (payload: IFetchSeasonsRequestPayload) => createAction(ActionTypes.FETCH_SEASONS_REQUEST, payload),

    serieDetailsRequest: (payload: ISeriedetailsRequestPayload) => createAction(ActionTypes.SET_CURRENT_SERIE, payload),

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

export interface IFetchGenresSuccessPayload {
    genre: IGenre[];
}

export interface IFetchSeriesPrefRequestPayload {
    genreScore: Array<{genre: IGenre, score: number}>
}

export interface IFetchSeriesPrefSuccessPayload {
    recommandedSeries: ISerie[];
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SERIES_ACTIONS>;