import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { NavBar } from './components';
import { LoginPage, NotificationsPage, RecommandationPage, RegisterPage, SerieDetailsPage, SeriesPage, StatistiquesPage, WatchListPage } from './pages';


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
                <Route path='/recommandation' component={RecommandationPage} />
                <Route path='/stats' component={StatistiquesPage} />
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
