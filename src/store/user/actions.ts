import { ActionCreatorsMapObject } from 'redux';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
}

export interface ILoginRequestPayload {
    login: string;
    password: string;
}

export interface ILoginSuccessPayload {
    login: string;
    password: string;
    id: number;
}


export const SERIES_ACTIONS = {
    loginFailure: () => createAction(ActionTypes.LOGIN_FAILURE),
    loginRequest: (payload: ILoginRequestPayload ) => createAction(ActionTypes.LOGIN_REQUEST, payload),
    loginSuccess: (payload: ILoginSuccessPayload) => createAction(ActionTypes.LOGIN_SUCCESS, payload),

}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SERIES_ACTIONS>;