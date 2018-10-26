import { INotificationsState } from './notification-state';
import { ISeriesState } from './series-state';
import { IUserState } from './user-state';
import { IWatchlistState } from './watchlist-state';

export interface IStore {
    serieReducer: ISeriesState,
    userReducer: IUserState,
    watchlistReducer: IWatchlistState,
    notificationReducer: INotificationsState
}