import { connect } from "react-redux";

import { push } from 'connected-react-router';

import { ISerie, IStore } from "../../interfaces";
import { SeriesPage } from './SeriesPage';

import { SERIES_ACTIONS } from '../../store/series';
import { WATCHLIST_ACTIONS } from '../../store/watchlist';
import { getDisplayRemoveSerie } from '../../store/watchlist';

const mapStateToProps = (state: IStore) => {
    return {
        displayRemoveSerie: (serie: ISerie) => getDisplayRemoveSerie(state, serie),
        series: state.serieReducer.series,
        userId: state.userReducer.user ? state.userReducer.user.id : null,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addSerieToWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.addSerieToWatchlistRequest({serieId, userId})),
    fetchSeries: (pageNumber: number, seriesPerPage: number) => dispatch(SERIES_ACTIONS.fetchSeriesRequest({pageNumber, seriesPerPage})),
    fetchSeriesName: (name: string) => dispatch(SERIES_ACTIONS.fetchSeriesNameRequest({name})),
    fetchUserWatchlist: (userId: string) => dispatch(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId})),
    goToSerieDetails: () => dispatch(push('/serie-details')),
    removeSerieOfWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.removeSerieOfWatchlistRequest({serieId, userId})),
    setCurrentSerieDetail: (serie: ISerie) => dispatch(SERIES_ACTIONS.serieDetailsRequest({serie}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);