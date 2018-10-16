
import * as React from 'react';
import './SerieDetailsPage.css';

import { ISerie } from '../../interfaces';

import { DetailedSerieTile } from '../../components';

interface ISerieDetailsPageProps {
  serie: ISerie
}

export class SerieDetailsPage extends React.Component<ISerieDetailsPageProps> {

  public render() {
    return (
      <div className="SerieDetailsPage">
        <div className="SerieDetailsPage-Tiles">
           <DetailedSerieTile 
              title={this.props.serie.title} 
              imgSrc={this.props.serie.imgSrc} 
              description={this.props.serie.description}/>
        </div>
      </div>
    );
  }
}
