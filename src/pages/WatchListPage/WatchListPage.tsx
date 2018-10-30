
import * as React from 'react';
import './WatchListPage.css';

import { ISerie } from '../../interfaces';

import { SerieTile } from '../../components';

interface IWatchListPageProps {
  userId: string;
  series: ISerie[],
  fetchUserWatchlist: (userId: string) => void;
  goToSerieDetails: () => void,
  removeSerieOfWatchlist: (serieId: string, userId: string) => void,
  setCurrentSerieDetail: (serie: ISerie) => void,
}

export class WatchListPage extends React.Component<IWatchListPageProps> {

  public componentWillMount() {
      this.props.fetchUserWatchlist(this.props.userId);
  }

  public handleSerieClick(serie: ISerie): void {
    this.props.setCurrentSerieDetail(serie);
    this.props.goToSerieDetails();
  }

  public handleIconClick(e: any, serie: ISerie) {
    e.stopPropagation();
    this.props.removeSerieOfWatchlist(serie.id, this.props.userId);
    this.props.fetchUserWatchlist(this.props.userId);
  }

  public render() {
    return (
      <div className="WatchListPage">
          <span>My List</span>
        {/* WATCHLIST
        {(this.props.series || []).map(serie => 
              <div key={`${serie.id}`} onClick={() => true}>
                <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc} iconType='none' onIconClick={(e) => true}/>
              </div>
            )} */}
            <div className="SeriesPage-Tiles">
            {(this.props.series || []).map(serie => 
              <div key={`${serie.id}`} onClick={() => this.handleSerieClick(serie)}>
                <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc} iconType='delete' onIconClick={(e) => this.handleIconClick(e, serie)}/>
              </div>
            )}
        </div>
      </div>
    );
  }
}
