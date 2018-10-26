import { Actions, ActionTypes } from './actions';

import { INotificationsState } from '../../interfaces';

export function notificationReducer(state : INotificationsState  = {}, action: Actions): INotificationsState {
    switch (action.type) {

        // FECTH USER WATCHLIST
        case ActionTypes.FETCH_USER_NOTIFICATIONS_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_USER_NOTIFICATIONS_SUCCESS:
            return {...state, notifications: action.payload ? action.payload.notifications : []};
        case ActionTypes.FETCH_USER_NOTIFICATIONS_FAILURE:
            return {...state, };
        default:
            return state;
    }
}