import { ISeason } from '../season';
import { ISerie } from '../serie';

export interface ISeriesState {
    series?: ISerie[];
    serieDetails?: ISerie;
    seasonsSerieDetails?: ISeason[];
    isAddingSerieToWatchlist?: boolean;
    hasErrorWhileAddingSerieToWatchlist?: boolean;
}