
import * as React from 'react';
import './SerieDetailsPage.css';

import { ISeason, ISerie } from '../../interfaces';

import { DetailedSerieTile } from '../../components';

interface ISerieDetailsPageProps {
  serie: ISerie,
  seasons: ISeason[],
  userId: string | null,
  addSerieToWatchlist: (serieId: string, userId: string) => void,
  fetchSeasons: (serieId: string) => void
}

export class SerieDetailsPage extends React.Component<ISerieDetailsPageProps> {

  public componentWillMount() {
    this.props.fetchSeasons(this.props.serie.id);
  }

  public handleIconClick() {
    if (this.props.userId) {
      this.props.addSerieToWatchlist(this.props.serie.id, this.props.userId)
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
              iconType={'add'}
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
}
