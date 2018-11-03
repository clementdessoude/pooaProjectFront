import { ActionCreatorsMapObject } from 'redux';
import { createAction } from '../util';

import { ISerie } from '../../interfaces';

// Actions type 
export enum ActionTypes {
    ADD_SERIE_TO_WATCHLIST_REQUEST = 'ADD_SERIE_TO_WATCHLIST_REQUEST',
    ADD_SERIE_TO_WATCHLIST_SUCCESS = 'ADD_SERIE_TO_WATCHLIST_SUCCESS',
    ADD_SERIE_TO_WATCHLIST_FAILURE = 'ADD_SERIE_TO_WATCHLIST_FAILURE',

    REMOVE_SERIE_OF_WATCHLIST_REQUEST = 'REMOVE_SERIE_OF_WATCHLIST_REQUEST',
    REMOVE_SERIE_OF_WATCHLIST_SUCCESS = 'REMOVE_SERIE_OF_WATCHLIST_SUCCESS',
    REMOVE_SERIE_OF_WATCHLIST_FAILURE = 'REMOVE_SERIE_OF_WATCHLIST_FAILURE',

    FETCH_USER_WATCHLIST_REQUEST = 'FETCH_USER_WATCHLIST_REQUEST',
    FETCH_USER_WATCHLIST_SUCCESS = 'FETCH_USER_WATCHLIST_SUCCESS',
    FETCH_USER_WATCHLIST_FAILURE = 'FETCH_USER_WATCHLIST_FAILURE',

    FETCH_USER_EPISODES_SEEN_REQUEST = 'FETCH_USER_EPISODES_SEEN_REQUEST',
    FETCH_USER_EPISODES_SEEN_SUCCESS = 'FETCH_USER_EPISODES_SEEN_SUCCESS',
    FETCH_USER_EPISODES_SEEN_FAILURE = 'FETCH_USER_EPISODES_SEEN_FAILURE',

    CHANGE_USER_EPISODES_SEEN_REQUEST = 'CHANGE_USER_EPISODES_SEEN_REQUEST',
    CHANGE_USER_EPISODES_SEEN_SUCCESS = 'CHANGE_USER_EPISODES_SEEN_SUCCESS',
    CHANGE_USER_EPISODES_SEEN_FAILURE = 'CHANGE_USER_EPISODES_SEEN_FAILURE',
}

export interface IAddSerieToWatchlistRequestPayload {
    serieId: string;
    userId: string;
}

export interface IRemoveSerieOfWatchlistRequestPayload {
    serieId: string;
    userId: string;
}

export interface IFetchUserWatchlistRequestPayload {
    userId: string;
}

export interface IFetchUserWatchlistSuccessPayload {
    series: ISerie[];
}

export interface IChangeUserEpisodesSeenRequestPayload {
    userId: string;
    episodeId: string;
    isSeen: boolean;
}


export interface IFetchUserEpisodesSeenRequestPayload {
    userId: string;
}

export interface IFetchUserEpisodesSeenSuccessPayload {
    episodesSeen: Array<{episodeId: string, isSeen: boolean}>;
}

export const WATCHLIST_ACTIONS = {
    addSerieToWatchlistFailure: () => createAction(ActionTypes.ADD_SERIE_TO_WATCHLIST_FAILURE),
    addSerieToWatchlistRequest: (payload: IAddSerieToWatchlistRequestPayload) => createAction(ActionTypes.ADD_SERIE_TO_WATCHLIST_REQUEST, payload),
    addSerieToWatchlistSuccess: () => createAction(ActionTypes.ADD_SERIE_TO_WATCHLIST_SUCCESS),

    removeSerieOfWatchlistFailure: () => createAction(ActionTypes.REMOVE_SERIE_OF_WATCHLIST_FAILURE),
    removeSerieOfWatchlistRequest: (payload: IRemoveSerieOfWatchlistRequestPayload) => createAction(ActionTypes.REMOVE_SERIE_OF_WATCHLIST_REQUEST, payload),
    removeSerieOfWatchlistSuccess: () => createAction(ActionTypes.REMOVE_SERIE_OF_WATCHLIST_SUCCESS),

    fetchUserWatchlistFailure: () => createAction(ActionTypes.FETCH_USER_WATCHLIST_FAILURE),
    fetchUserWatchlistRequest: (payload: IFetchUserWatchlistRequestPayload) => createAction(ActionTypes.FETCH_USER_WATCHLIST_REQUEST, payload),
    fetchUserWatchlistSuccess: (payload: IFetchUserWatchlistSuccessPayload) => createAction(ActionTypes.FETCH_USER_WATCHLIST_SUCCESS, payload),

    fetchUserEpisodesSeenFailure: () => createAction(ActionTypes.FETCH_USER_EPISODES_SEEN_FAILURE),
    fetchUserEpisodesSeenRequest: (payload: IFetchUserEpisodesSeenRequestPayload) => createAction(ActionTypes.FETCH_USER_EPISODES_SEEN_REQUEST, payload),
    fetchUserEpisodesSeenSuccess: (payload: IFetchUserEpisodesSeenSuccessPayload) => createAction(ActionTypes.FETCH_USER_EPISODES_SEEN_SUCCESS, payload),

    changeUserEpisodesSeenFailure: () => createAction(ActionTypes.CHANGE_USER_EPISODES_SEEN_FAILURE),
    changeUserEpisodesSeenRequest: (payload: IChangeUserEpisodesSeenRequestPayload) => createAction(ActionTypes.CHANGE_USER_EPISODES_SEEN_REQUEST, payload),
    changeUserEpisodesSeenSuccess: () => createAction(ActionTypes.CHANGE_USER_EPISODES_SEEN_SUCCESS),

}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof WATCHLIST_ACTIONS>;