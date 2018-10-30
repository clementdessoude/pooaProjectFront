import { connect } from "react-redux";

import { push } from 'connected-react-router';

import { IGenre, ISerie, IStore } from "../../interfaces";
import { RecommandationPage } from './RecommandationPage';

import { SERIES_ACTIONS } from '../../store/series';
import { getDisplayRemoveSerie, WATCHLIST_ACTIONS } from '../../store/watchlist';

const mapStateToProps = (state: IStore) => {
  return {
    displayRemoveSerie: (serie: ISerie) => getDisplayRemoveSerie(state, serie),
    genres: state.serieReducer.allGenre,
    recommandedSeries: state.serieReducer.recommandedSeries || [],
    userId: state.userReducer.user ? state.userReducer.user.id : null,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
    addSerieToWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.addSerieToWatchlistRequest({serieId, userId})),
    fetchGenres: () => dispatch(SERIES_ACTIONS.fetchGenresRequest()),
    fetchRecommandedSeries: (genreScore: Array<{genre: IGenre, score: number}>) => dispatch(SERIES_ACTIONS.fetchSeriesPrefRequest({genreScore})),
    fetchUserWatchlist: (userId: string) => dispatch(WATCHLIST_ACTIONS.fetchUserWatchlistRequest({userId})),
    goToSerieDetails: () => dispatch(push('/serie-details')),
    removeSerieOfWatchlist: (serieId: string, userId: string) => dispatch(WATCHLIST_ACTIONS.removeSerieOfWatchlistRequest({serieId, userId})),
    setCurrentSerieDetail: (serie: ISerie) => dispatch(SERIES_ACTIONS.serieDetailsRequest({serie}))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommandationPage);