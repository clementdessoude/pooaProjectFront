import { connect } from "react-redux";

import { IStore } from "../../interfaces";
import { SeriesPage } from './SeriesPage';

import { SERIES_ACTIONS } from '../../store/series';

const mapStateToProps = (state: IStore) => {
    return {
        series: state.serieReducer.series,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchSeries: () => dispatch(SERIES_ACTIONS.fetchSeriesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);