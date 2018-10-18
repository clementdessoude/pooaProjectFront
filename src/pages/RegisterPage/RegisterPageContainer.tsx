import { connect } from "react-redux";

import { IStore } from "../../interfaces";
import { RegisterPage } from './RegisterPage';

import { USER_ACTIONS } from '../../store/user';

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  registerRequest: (login: string, password: string, birthdate: string) => dispatch(USER_ACTIONS.registerRequest({ login, password, birthdate })),

});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);