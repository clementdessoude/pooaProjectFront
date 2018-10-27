import { connect } from "react-redux";


import { ISerie, IStore } from "../../interfaces";
import { WatchListPage } from './WatchListPage';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchListPage);