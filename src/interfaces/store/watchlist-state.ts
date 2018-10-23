import { ISerie } from '../serie';

export interface IWatchlistState {
    seriesInUserWatchlist?: ISerie[];
    isAddingSerieToWatchlist?: boolean;
    hasErrorWhileAddingSerieToWatchlist?: boolean;
}