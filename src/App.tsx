import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { NavBar } from './components';
import { LoginPage, NotificationsPage, RegisterPage, SerieDetailsPage, SeriesPage, WatchListPage } from './pages';

// interface IAppProps extends RouteComponentProps<{}> {
//   // isLoginVisible: boolean;
// }

class App extends React.Component<{}> {

  public render() {
    return (
      <div className="App">
        <div className="App-PageContainer">
          <div className="NavContainer">
            <NavBar />
          </div>
          <div className="App-PageContent">
            <div className="App-Content">
              <Switch>
                <Route path='/home' component={SeriesPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/serie-details' component={SerieDetailsPage} />
                <Route path='/watchlist' component={WatchListPage} />
                <Route path='/notifications' component={NotificationsPage} />
                <Route path='/' component={SeriesPage} /> 
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
