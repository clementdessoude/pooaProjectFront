import { ActionCreatorsMapObject } from 'redux';
import { IUser } from '../../interfaces';
import { createAction } from '../util';

// Actions type 
export enum ActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    REGISTER_REQUEST = 'REGISTER_REQUEST',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAILURE = 'REGISTER_FAILURE',
}

export interface ILoginRequestPayload {
    login: string;
    password: string;
}

export interface ILoginSuccessPayload {
    user: IUser;
}

export interface IRegisterRequestPayload {
    login: string;
    password: string;
    birthdate: string;
}

export const USER_ACTIONS = {
    loginFailure: () => createAction(ActionTypes.LOGIN_FAILURE),
    loginRequest: (payload: ILoginRequestPayload ) => createAction(ActionTypes.LOGIN_REQUEST, payload),
    loginSuccess: (payload: ILoginSuccessPayload) => createAction(ActionTypes.LOGIN_SUCCESS, payload),
    registerFailure: () => createAction(ActionTypes.REGISTER_FAILURE),
    registerRequest: (payload: IRegisterRequestPayload) => createAction(ActionTypes.REGISTER_REQUEST, payload),
    registerSuccess: () => createAction(ActionTypes.REGISTER_SUCCESS),

}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof USER_ACTIONS>;