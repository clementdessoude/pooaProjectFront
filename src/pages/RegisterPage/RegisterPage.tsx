
import * as React from 'react';
import './RegisterPage.css';

import TextField from '@material-ui/core/TextField';

interface ILoginState {
    login: string;
    password: string;
}

export class RegisterPage extends React.Component<{},ILoginState> {

  public componentWillMount(){
      const login = "";
      const password = "";
      this.setState({login, password})
  }

  public handleLoginChange(login: string) {
    this.setState({login});
  }

  public handlePasswordChange(password: string) {
    this.setState({password});
  }

  public render() {
    return (
      <div className="RegisterPage">
        Register
        <div>
            <form className="RegisterPage-Form" autoComplete="off">
                <TextField 
                    id="login"
                    label="Login"
                    value={this.state.login}
                    className="RegisterPage-TextField"
                    onChange={(ev) => this.handleLoginChange(ev.target.value)}/>
                <TextField 
                    id="password"
                    label="Password"
                    value={this.state.password}
                    className="RegisterPage-TextField"
                    type="password"
                    onChange={(ev) => this.handlePasswordChange(ev.target.value)}/>
            </form>
        </div>
      </div>
    );
  }
}