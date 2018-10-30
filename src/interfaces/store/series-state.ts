import { IGenre } from '../genre';
import { ISeason } from '../season';
import { ISerie } from '../serie';

export interface ISeriesState {
    series?: ISerie[];
    serieDetails?: ISerie;
    seasonsSerieDetails?: ISeason[];
    isAddingSerieToWatchlist?: boolean;
    hasErrorWhileAddingSerieToWatchlist?: boolean;
    allGenre?: IGenre[];
    recommandedSeries?: ISerie[];
}