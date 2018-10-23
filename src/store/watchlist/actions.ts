import { ActionCreatorsMapObject } from 'redux';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    ADD_SERIE_TO_WATCHLIST_REQUEST = 'ADD_SERIE_TO_WATCHLIST_REQUEST',
    ADD_SERIE_TO_WATCHLIST_SUCCESS = 'ADD_SERIE_TO_WATCHLIST_SUCCESS',
    ADD_SERIE_TO_WATCHLIST_FAILURE = 'ADD_SERIE_TO_WATCHLIST_FAILURE',
}

export interface IAddSerieToWatchlistRequestPayload {
    serieId: string;
    userId: string;
}


export const WATCHLIST_ACTIONS = {
    addSerieToWatchlistFailure: () => createAction(ActionTypes.ADD_SERIE_TO_WATCHLIST_FAILURE),
    addSerieToWatchlistRequest: (payload: IAddSerieToWatchlistRequestPayload) => createAction(ActionTypes.ADD_SERIE_TO_WATCHLIST_REQUEST, payload),
    addSerieToWatchlistSuccess: () => createAction(ActionTypes.ADD_SERIE_TO_WATCHLIST_SUCCESS),
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof WATCHLIST_ACTIONS>;