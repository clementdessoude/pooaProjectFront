import { connect } from "react-redux";

import { IStore } from "../../interfaces";
import NavBar from './NavBar';

import { USER_ACTIONS } from '../../store/user';

const mapStateToProps = (state: IStore) => {
  return {
    isLogIn: state.userReducer && state.userReducer.user ? true : false,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  logOut: () => dispatch(USER_ACTIONS.logOut()),  
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);