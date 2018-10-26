import { ActionCreatorsMapObject } from 'redux';
import { INotification } from '../../interfaces';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    FETCH_USER_NOTIFICATIONS_REQUEST = 'FETCH_USER_NOTIFICATIONS_REQUEST',
    FETCH_USER_NOTIFICATIONS_SUCCESS = 'FETCH_USER_NOTIFICATIONS_SUCCESS',
    FETCH_USER_NOTIFICATIONS_FAILURE = 'FETCH_USER_NOTIFICATIONS_FAILURE',
}

export interface IFetchUserNotificationsSuccessPayload {
    notifications: INotification[];
}

export interface IFetchUserNotificationsRequestPayload {
    userId: string;
}

export const NOTIFICATIONS_ACTIONS = {
    fetchUserNotificationsFailure: () => createAction(ActionTypes.FETCH_USER_NOTIFICATIONS_FAILURE),
    fetchUserNotificationsRequest: (payload: IFetchUserNotificationsRequestPayload) => createAction(ActionTypes.FETCH_USER_NOTIFICATIONS_REQUEST, payload),
    fetchUserNotificationsSuccess: (payload: IFetchUserNotificationsSuccessPayload) => createAction(ActionTypes.FETCH_USER_NOTIFICATIONS_SUCCESS, payload),

}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof NOTIFICATIONS_ACTIONS>;