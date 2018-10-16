import { connect } from "react-redux";


import { IStore } from "../../interfaces";
import { SerieDetailsPage } from './SerieDetailsPage';


const mapStateToProps = (state: IStore) => {
    return {
        serie: state.serieReducer.serieDetails,
    };
};

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailsPage);