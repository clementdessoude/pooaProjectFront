import { connect } from "react-redux";


import { IStore } from "../../interfaces";
import { SerieDetailsPage } from './SerieDetailsPage';

import { SERIES_ACTIONS } from '../../store/series';
import { WATCHLIST_ACTIONS } from '../../store/watchlist';

import { getDisplayRemove } from '../../store/watchlist';

const mapStateToProps = (state: IStore) => {
    return {
        displayRemove: getDisplayRemove(state), 
        seasons: state.serieReducer.seasonsSerieDetails,
        serie: state.serieReducer.serieDetails,
        userId: state.userReducer.user ? state.userReducer.user.id : null,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addSerieToWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.addSerieToWatchlistRequest({serieId, userId})),
    changeUserEpisodesSeenRequest: (userId: string, episodeId: string, isSeen: boolean, rate: number) => dispatch(SERIES_ACTIONS.changeUserEpisodesSeenRequest({userId, episodeId, isSeen, rate })),
    fetchUserEpisodesSeenRequest: (serieId: string, userId: string) => dispatch(SERIES_ACTIONS.fetchUserEpisodesSeenRequest({serieId, userId})),
    fetchSeasons: (serieId: string) => dispatch(SERIES_ACTIONS.fetchSeasonsRequest({serieId})),
    fetchUserWatchlist: (userId: string) => dispatch(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId})),
    removeSerieOfWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.removeSerieOfWatchlistRequest({serieId, userId})),

});

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailsPage);