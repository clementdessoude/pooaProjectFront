import { Actions, ActionTypes } from './actions';

import { IStatsState } from '../../interfaces';

export function statsReducer(state : IStatsState  = {}, action: Actions): IStatsState {
    let episodeSeenCount: number;
    let serieInWatchlistCount: number;
    let serieByGenreCount: any[];
    let totalWatchingTime: number;
    switch (action.type) {
        // FETCH_STATS 
        case ActionTypes.FETCH_STATS_REQUEST:
            return { ...state };
        case ActionTypes.FETCH_STATS_SUCCESS:
            if (action.payload) {
                episodeSeenCount = action.payload.episodeSeenCount;
                serieInWatchlistCount = action.payload.serieInWatchlistCount;
                serieByGenreCount = action.payload.serieByGenreCount;
                totalWatchingTime = action.payload.totalWatchingTime;
                return { ...state, episodeSeenCount, serieInWatchlistCount, serieByGenreCount, totalWatchingTime };

            }
            return {...state };
        case ActionTypes.FETCH_STATS_FAILURE:
            return { ...state };

        default:
            return state;
    }
}