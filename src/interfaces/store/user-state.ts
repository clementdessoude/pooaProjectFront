import { IUser } from '../user';

export interface IUserState {
    user?: IUser;
    isFetchingLogin?: boolean;
    isLoginError?: boolean; 
}