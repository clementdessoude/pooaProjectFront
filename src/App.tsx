import * as React from 'react';
import './App.css';

import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import { NavBar } from './components';
import { LoginPage, SeriesPage } from './pages';

interface IAppProps extends RouteComponentProps<{}> {
  
}

class App extends React.Component<IAppProps> {

  private NAV_ITEMS = [
    {title: "home", handler: () => this.props.history.push('/home')},
    {title: "Log in", handler: () => this.props.history.push('/login')},
  ]

  public render() {
    return (
      <div className="App">
        <div className="App-PageContainer">
          <div className="NavContainer">
            <NavBar navItems={this.NAV_ITEMS}/>
          </div>
          <div className="App-PageContent">
            <div className="App-Content">
              <Switch>
                <Route path='/home' component={SeriesPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/' component={SeriesPage} /> 
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
