import { connect } from "react-redux";

import { IStore } from "../../interfaces";

import { StatistiquesPage } from './StatistiquesPage';

const mapStateToProps = (state: IStore) => {
    return {
        nbEpisodeSeen: 3,
    };
};

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(StatistiquesPage);