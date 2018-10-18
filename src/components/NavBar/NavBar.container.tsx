import { connect } from "react-redux";

import { IStore } from "../../interfaces";
import NavBar from './NavBar';

const mapStateToProps = (state: IStore) => {
  return {
    isLoginVisible: state.userReducer && state.userReducer.user ? false : true,
  };
};

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);