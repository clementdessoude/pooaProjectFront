
import * as React from 'react';
import './SerieDetailsPage.css';

import { ISeason, ISerie } from '../../interfaces';

import { DetailedSerieTile } from '../../components';

interface ISerieDetailsPageProps {
  displayRemove: boolean;
  serie: ISerie,
  seasons: ISeason[],
  userId: string | null,
  addSerieToWatchlist: (serieId: string, userId: string) => void,
  fetchSeasons: (serieId: string) => void,
  fetchUserWatchlist: (userId: string) => void;
  removeSerieOfWatchlist: (serieId: string, userId: string) => void,
}

export class SerieDetailsPage extends React.Component<ISerieDetailsPageProps> {

  public componentWillMount() {
    this.props.fetchSeasons(this.props.serie.id);
    if (this.props.userId) {
      this.props.fetchUserWatchlist(this.props.userId);
    }
  }

  public handleIconClick() {
    if (this.props.userId) {
      if (this.props.displayRemove) {
        this.props.removeSerieOfWatchlist(this.props.serie.id, this.props.userId)
      } else {
        this.props.addSerieToWatchlist(this.props.serie.id, this.props.userId)
      }
    }
  }

  public render() {
    return (
      <div className="SerieDetailsPage">
        <div className="SerieDetailsPage-Tiles">
           <DetailedSerieTile 
              title={this.props.serie.title} 
              imgSrc={this.props.serie.imgSrc} 
              description={this.props.serie.description}
              iconType={this.getIconType()}
              onIconClick={() => this.handleIconClick()}/>
        </div>
        <div>
          {(this.props.seasons || []).map((season: ISeason, index) => 
              <span key={`${season.name}-${index}`}>{season.name}</span>
          )}
        </div>
      </div>
    );
  }

  private getIconType() {
    if(this.props.userId){
      return this.props.displayRemove ? 'delete' : 'add';
    } else {
      return 'none';
    }
  }
}
