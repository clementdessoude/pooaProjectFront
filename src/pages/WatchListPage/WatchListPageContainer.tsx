import { connect } from "react-redux";


import { IStore } from "../../interfaces";
import { WatchListPage } from './WatchListPage';

import { WATCHLIST_ACTIONS } from '../../store/watchlist';

const mapStateToProps = (state: IStore) => {
    return {
        series: state.watchlistReducer.seriesInUserWatchlist,
        userId: state.userReducer.user ? state.userReducer.user.id : null,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchUserWatchlist: (userId: string) => dispatch(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId})),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchListPage);