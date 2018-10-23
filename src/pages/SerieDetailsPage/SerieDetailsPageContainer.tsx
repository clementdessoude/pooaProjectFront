import { connect } from "react-redux";


import { IStore } from "../../interfaces";
import { SerieDetailsPage } from './SerieDetailsPage';

import { SERIES_ACTIONS } from '../../store/series';


const mapStateToProps = (state: IStore) => {
    return {
        seasons: state.serieReducer.seasonsSerieDetails,
        serie: state.serieReducer.serieDetails,
        userId: state.userReducer.user ? state.userReducer.user.id : null,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addSerieToWatchlist: (serieId: string, userId: string) => dispatch(SERIES_ACTIONS.addSerieToWatchlistRequest({serieId, userId})),
    fetchSeasons: (serieId: string) => dispatch(SERIES_ACTIONS.fetchSeasonsRequest({serieId})),
});

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailsPage);