import * as React from 'react';
import './App.css';

import { SeriesPage } from './pages';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        POOA Series FR
        Best POOA Project of the Year !!!!
        Please like, you can find us in Saclay.
        <div className="App-PageContainer">
          <SeriesPage/>
        </div>
      </div>
    );
  }
}

export default App;
