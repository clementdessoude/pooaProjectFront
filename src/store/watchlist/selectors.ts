import { ISerie, IStore } from '../../interfaces';

export const getDisplayRemove = (state: IStore): boolean => {
    const seriesId = (state.watchlistReducer.seriesInUserWatchlist || []).map(s => s.id);
    if (seriesId && state.serieReducer.serieDetails) {
        if (seriesId.indexOf(state.serieReducer.serieDetails.id) !== -1) {
            return true;
        }
    }
    return false;
}

export const getDisplayRemoveSerie = (state: IStore, serie: ISerie): boolean => {
    const seriesId = (state.watchlistReducer.seriesInUserWatchlist || []).map(s => s.id);
    if (seriesId && serie.id) {
        if (seriesId.indexOf(serie.id) !== -1) {
            return true;
        }
    }
    return false;
}