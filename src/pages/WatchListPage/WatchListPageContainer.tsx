import { connect } from "react-redux";

import { push } from 'connected-react-router';


import { ISerie, IStore } from "../../interfaces";
import { WatchListPage } from './WatchListPage';

import { SERIES_ACTIONS } from '../../store/series';
import { WATCHLIST_ACTIONS } from '../../store/watchlist';


const getSeries = (state: IStore) => {
    return (state.watchlistReducer.seriesInUserWatchlist || []).sort((s1: ISerie, s2: ISerie) => 
        {
            return s1.title > s2.title ? 1 : s1.title === s2.title ? 0 : -1
        } 
    )
};

const mapStateToProps = (state: IStore) => {
    return {
        series: getSeries(state),
        userId: state.userReducer.user ? state.userReducer.user.id : null,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchUserWatchlist: (userId: string) => dispatch(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId})),
    goToSerieDetails: () => dispatch(push('/serie-details')),
    removeSerieOfWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.removeSerieOfWatchlistRequest({serieId, userId})),
    setCurrentSerieDetail: (serie: ISerie) => dispatch(SERIES_ACTIONS.serieDetailsRequest({serie})),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchListPage);