
import * as React from 'react';
import './WatchListPage.css';

import { ISerie } from '../../interfaces';

import { SerieTile } from '../../components';

interface IWatchListPageProps {
  userId: string;
  seriesInWatchList: ISerie[],
  fetchUserWatchlist: (userId: string) => void;
}

export class WatchListPage extends React.Component<IWatchListPageProps> {

  public componentWillMount() {
      this.props.fetchUserWatchlist(this.props.userId);
  }

  public render() {
    return (
      <div className="WatchListPage">
        WATCHLIST
        {(this.props.seriesInWatchList || []).map(serie => 
              <div key={`${serie.id}`} onClick={() => true}>
                <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc}/>
              </div>
            )}
      </div>
    );
  }
}
