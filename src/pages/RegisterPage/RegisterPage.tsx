
import * as React from 'react';
import './RegisterPage.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface ILoginState {
    login: string;
    password: string;
    birthdate: string;
}

interface IRegisterProps {
  registerRequest: (login: string, password: string, birthdate: string) => void;
}

export class RegisterPage extends React.Component<IRegisterProps,ILoginState> {

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

  public handleRegister() {
    this.props.registerRequest(
      this.state.login,
      this.state.password,
      this.state.birthdate   
    );
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
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    className="RegisterPage-TextField"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                <Button variant="contained" color="primary" className="RegisterPage-Button" onClick={() => this.handleRegister()}>
                    Register
                </Button>
            </form>
        </div>
      </div>
    );
  }
}
