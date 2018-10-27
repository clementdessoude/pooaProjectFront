import { connect } from "react-redux";


import { IStore } from "../../interfaces";
import { SerieDetailsPage } from './SerieDetailsPage';

import { SERIES_ACTIONS } from '../../store/series';
import { WATCHLIST_ACTIONS } from '../../store/watchlist';

const displayRemove = (state: IStore): boolean => {
    const seriesId = (state.watchlistReducer.seriesInUserWatchlist || []).map(s => s.id);
    if (seriesId && state.serieReducer.serieDetails) {
        if (seriesId.indexOf(state.serieReducer.serieDetails.id) !== -1) {
            return true;
        }
    }
    return false;
}


const mapStateToProps = (state: IStore) => {
    return {
        displayRemove: displayRemove(state), 
        seasons: state.serieReducer.seasonsSerieDetails,
        serie: state.serieReducer.serieDetails,
        userId: state.userReducer.user ? state.userReducer.user.id : null,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addSerieToWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.addSerieToWatchlistRequest({serieId, userId})),
    fetchSeasons: (serieId: string) => dispatch(SERIES_ACTIONS.fetchSeasonsRequest({serieId})),
    fetchUserWatchlist: (userId: string) => dispatch(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId})),
    removeSerieOfWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.removeSerieOfWatchlistRequest({serieId, userId})),

});

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailsPage);