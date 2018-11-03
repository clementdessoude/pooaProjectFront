import { ActionCreatorsMapObject } from 'redux';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    FETCH_STATS_REQUEST = 'FETCH_STATS_REQUEST',
    FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS',
    FETCH_STATS_FAILURE = 'FETCH_STATS_FAILURE',

}

export const STATS_ACTIONS = {
    fetchStatsFailure: () => createAction(ActionTypes.FETCH_STATS_FAILURE),
    fetchStatsRequest: (payload: IFetchStatsRequestPayload ) => createAction(ActionTypes.FETCH_STATS_REQUEST, payload),
    fetchStatsSuccess: (payload: IFetchStatsSuccessPayload) => createAction(ActionTypes.FETCH_STATS_SUCCESS, payload),

}

export interface IFetchStatsRequestPayload {
    userId: string;
}

export interface IFetchStatsSuccessPayload {
    episodeSeenCount: number;
    serieInWatchlistCount: number;
    serieByGenreCount: any[];
    totalWatchingTime: number;
}


export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof STATS_ACTIONS>;