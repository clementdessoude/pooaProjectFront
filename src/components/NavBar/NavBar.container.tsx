import { connect } from "react-redux";

import { push } from 'connected-react-router';

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
  pushNavigation: (path: string) => dispatch(push(path)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);