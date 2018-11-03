import { connect } from "react-redux";

import { IStore } from "../../interfaces";

import { StatistiquesPage } from './StatistiquesPage';

import { STATS_ACTIONS } from '../../store/stats';

const mapStateToProps = (state: IStore) => {
    return {
        episodeSeenCount: state.statsReducer.episodeSeenCount,
        serieByGenreCount: state.statsReducer.serieByGenreCount,
        serieInWatchlistCount: state.statsReducer.serieInWatchlistCount,
        totalWatchingTime: state.statsReducer.totalWatchingTime,
        userId: state.userReducer.user ? state.userReducer.user.id : null,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchStatsRequest: (userId: string ) => dispatch(STATS_ACTIONS.fetchStatsRequest({userId})),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatistiquesPage);