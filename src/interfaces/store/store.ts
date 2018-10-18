import { ISeriesState } from './series-state';
import { IUserState } from './user-state';

export interface IStore {
    serieReducer: ISeriesState,
    userReducer: IUserState
}