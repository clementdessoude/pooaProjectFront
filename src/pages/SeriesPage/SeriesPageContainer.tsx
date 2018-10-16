import { connect } from "react-redux";

import { push } from 'connected-react-router'

import { ISerie, IStore } from "../../interfaces";
import { SeriesPage } from './SeriesPage';

import { SERIES_ACTIONS } from '../../store/series';

const mapStateToProps = (state: IStore) => {
    return {
        series: state.serieReducer.series,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchSeries: () => dispatch(SERIES_ACTIONS.fetchSeriesRequest()),
    goToSerieDetails: () => dispatch(push('/serie-details')),
    setCurrentSerieDetail: (serie: ISerie) => dispatch(SERIES_ACTIONS.serieDetailsRequest({serie}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);