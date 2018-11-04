import { Actions, ActionTypes } from './actions';

import { IEpisode, ISeason, ISeriesState } from '../../interfaces';

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

        // GENRES fetch
        case ActionTypes.FETCH_GENRES_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_GENRES_SUCCESS:
            return {...state, allGenre: action.payload ? action.payload.genre : []};
        case ActionTypes.FETCH_GENRES_FAILURE:
            return {...state, };

        // SERIES PREF fetch
        case ActionTypes.FETCH_SERIES_PREF_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_SERIES_PREF_SUCCESS:
            return {...state, recommandedSeries: action.payload ? action.payload.recommandedSeries : []};
        case ActionTypes.FETCH_SERIES_PREF_FAILURE:
            return {...state, };

        // SERIE Details
        case ActionTypes.SET_CURRENT_SERIE:
            return {...state, serieDetails: action.payload ? action.payload.serie : undefined };


        
        // FECTH USER WATCHLIST
        case ActionTypes.FETCH_USER_EPISODES_SEEN_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_USER_EPISODES_SEEN_FAILURE:
            return {...state, };
        case ActionTypes.FETCH_USER_EPISODES_SEEN_SUCCESS:
            if (action.payload && state.seasonsSerieDetails) {
                const episodesInfo = action.payload.episodesIdInfo || [];
                const episodesId = Object.keys(episodesInfo);
                // tslint:disable:no-console
                console.log("reducer payload", episodesInfo, episodesId);
                const seasonsSerieDetails = state.seasonsSerieDetails.map((season: ISeason) => {
                    if (season.episodes) {
                        const newSeason = {...season, episodes: season.episodes.map((episode: IEpisode) => {
                            const isSeen = episodesInfo[episode.id].seen;
                            const rate =  episodesInfo[episode.id].rate;
                            const avgRate =  episodesInfo[episode.id].averageRate;
                            return {...episode, isSeen, rate, avgRate};
                        })}
                        return newSeason;
                    }
                    return season;
                })
                // tslint:disable:no-console
                console.log("reducer", seasonsSerieDetails);
                return {...state, seasonsSerieDetails};
            }
            return {...state, };
        

        default:
            return state;
    }
}