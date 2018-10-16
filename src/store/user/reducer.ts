import { Actions, ActionTypes } from './actions';

import { IUserState } from '../../interfaces';

export function userReducer(state : IUserState  = {}, action: Actions): IUserState {
    switch (action.type) {
        // LOGIN 
        case ActionTypes.LOGIN_REQUEST:
            return {...state, };
        case ActionTypes.LOGIN_SUCCESS:
            return {...state, };
        case ActionTypes.LOGIN_FAILURE:
            return {...state, };

        default:
            return state;
    }
}