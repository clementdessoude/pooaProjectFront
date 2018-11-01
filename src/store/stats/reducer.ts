import { Actions, ActionTypes } from './actions';

import { IUserState } from '../../interfaces';

export function statsReducer(state : IUserState  = {}, action: Actions): IUserState {

    switch (action.type) {
        // FETCH_STATS 
        case ActionTypes.FETCH_STATS_REQUEST:
            return { ...state };
        case ActionTypes.FETCH_STATS_SUCCESS:
            return { ...state };
        case ActionTypes.FETCH_STATS_FAILURE:
            return { ...state };

        default:
            return state;
    }
}