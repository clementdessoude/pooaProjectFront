
import * as React from 'react';
import './WatchListPage.css';

import { ISerie } from '../../interfaces';

interface IWatchListPageProps {
  seriesInWatchList: ISerie[]
}

export class WatchListPage extends React.Component<IWatchListPageProps> {

  public render() {
    return (
      <div className="WatchListPage">
        WATCHLIST
      </div>
    );
  }
}
