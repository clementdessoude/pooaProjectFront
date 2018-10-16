
import * as React from 'react';
import './LoginPage.css';

import TextField from '@material-ui/core/TextField';

interface ILoginState {
    login: string;
    password: string;
}

export class LoginPage extends React.Component<{},ILoginState> {

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
      <div className="LoginPage">
        Log In
        <div>
            <form className="LoginPage-Form" autoComplete="off">
                <TextField 
                    id="login"
                    label="Login"
                    value={this.state.login}
                    className="LoginPage-TextField"
                    onChange={(ev) => this.handleLoginChange(ev.target.value)}/>
                <TextField 
                    id="password"
                    label="Password"
                    value={this.state.password}
                    className="LoginPage-TextField"
                    type="password"
                    onChange={(ev) => this.handlePasswordChange(ev.target.value)}/>
            </form>
        </div>
      </div>
    );
  }
}
