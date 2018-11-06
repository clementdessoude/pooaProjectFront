import { ActionCreatorsMapObject } from 'redux';
import { IGenre, ISeason, ISerie } from '../../interfaces';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    FETCH_SERIES_REQUEST = 'FETCH_SERIES_REQUEST',
    FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS',
    FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE',

    FETCH_SERIES_NAME_REQUEST = 'FETCH_SERIES_NAME_REQUEST',
    FETCH_SERIES_NAME_SUCCESS = 'FETCH_SERIES_NAME_SUCCESS',
    FETCH_SERIES_NAME_FAILURE = 'FETCH_SERIES_NAME_FAILURE',

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

    FETCH_USER_EPISODES_SEEN_REQUEST = 'FETCH_USER_EPISODES_SEEN_REQUEST',
    FETCH_USER_EPISODES_SEEN_SUCCESS = 'FETCH_USER_EPISODES_SEEN_SUCCESS',
    FETCH_USER_EPISODES_SEEN_FAILURE = 'FETCH_USER_EPISODES_SEEN_FAILURE',

    CHANGE_USER_EPISODES_SEEN_REQUEST = 'CHANGE_USER_EPISODES_SEEN_REQUEST',
    CHANGE_USER_EPISODES_SEEN_SUCCESS = 'CHANGE_USER_EPISODES_SEEN_SUCCESS',
    CHANGE_USER_EPISODES_SEEN_FAILURE = 'CHANGE_USER_EPISODES_SEEN_FAILURE',
}

export const SERIES_ACTIONS = {
    fecthSeriesFailure: () => createAction(ActionTypes.FETCH_SERIES_FAILURE),
    fecthSeriesSuccess: (payload: IFetchSeriesSuccessPayload) => createAction(ActionTypes.FETCH_SERIES_SUCCESS, payload),
    fetchSeriesRequest: (payload: IFetchSeriesRequestPayload) => createAction(ActionTypes.FETCH_SERIES_REQUEST, payload),

    fecthSeriesNameFailure: () => createAction(ActionTypes.FETCH_SERIES_NAME_FAILURE),
    fecthSeriesNameSuccess: (payload: IFetchSeriesNameSuccessPayload) => createAction(ActionTypes.FETCH_SERIES_NAME_SUCCESS, payload),
    fetchSeriesNameRequest: (payload: IFetchSeriesNameRequestPayload) => createAction(ActionTypes.FETCH_SERIES_NAME_REQUEST, payload),

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

    fetchUserEpisodesSeenFailure: () => createAction(ActionTypes.FETCH_USER_EPISODES_SEEN_FAILURE),
    fetchUserEpisodesSeenRequest: (payload: IFetchUserEpisodesSeenRequestPayload) => createAction(ActionTypes.FETCH_USER_EPISODES_SEEN_REQUEST, payload),
    fetchUserEpisodesSeenSuccess: (payload: IFetchUserEpisodesSeenSuccessPayload) => createAction(ActionTypes.FETCH_USER_EPISODES_SEEN_SUCCESS, payload),

    changeUserEpisodesSeenFailure: () => createAction(ActionTypes.CHANGE_USER_EPISODES_SEEN_FAILURE),
    changeUserEpisodesSeenRequest: (payload: IChangeUserEpisodesSeenRequestPayload) => createAction(ActionTypes.CHANGE_USER_EPISODES_SEEN_REQUEST, payload),
    changeUserEpisodesSeenSuccess: () => createAction(ActionTypes.CHANGE_USER_EPISODES_SEEN_SUCCESS),

}

export interface IFetchSeriesSuccessPayload {
    series: ISerie[];
}

export interface IFetchSeriesRequestPayload {
    pageNumber: number;
    seriesPerPage: number;
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

export interface IChangeUserEpisodesSeenRequestPayload {
    userId: string;
    episodeId: string;
    isSeen: boolean;
    rate: number;
}


export interface IFetchUserEpisodesSeenRequestPayload {
    userId: string;
    serieId: string;
}

export interface IFetchUserEpisodesSeenSuccessPayload {
    episodesIdInfo: {[id: number]: {averageRate: number, rate: number, seen: boolean}};
}

export interface IFetchSeriesNameRequestPayload {
    name: string;
}

export interface IFetchSeriesNameSuccessPayload {
    series: ISerie[];
}


export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SERIES_ACTIONS>;