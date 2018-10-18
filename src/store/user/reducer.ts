import { Actions, ActionTypes } from './actions';

import { IUserState } from '../../interfaces';

export function userReducer(state : IUserState  = {}, action: Actions): IUserState {
    let isFetchingLogin: boolean;
    let isLoginError: boolean;

    switch (action.type) {
        // LOGIN 
        case ActionTypes.LOGIN_REQUEST:
            isFetchingLogin = true;
            isLoginError = false;
            return { ...state, isFetchingLogin, isLoginError};
        case ActionTypes.LOGIN_SUCCESS:
            isFetchingLogin = false;
            isLoginError = false;
            const user = action.payload ? action.payload.user : undefined;
            return { ...state, user, isFetchingLogin, isLoginError};
        case ActionTypes.LOGIN_FAILURE:
            isFetchingLogin = false;
            isLoginError = true;
            return { ...state, isLoginError, isFetchingLogin};

        default:
            return state;
    }
}