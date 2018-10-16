
import * as React from 'react';
import './SeriesPage.css';

import { SerieTile } from '../../components';
import { ISerie } from '../../interfaces';

interface ISeriesPageProps {
  fetchSeries: () => void,
  goToSerieDetails: () => void,
  setCurrentSerieDetail: (serie: ISerie) => void,
  series: ISerie[]
}

export class SeriesPage extends React.Component<ISeriesPageProps> {

  public componentDidMount() {
    this.props.fetchSeries();
  }

  public handleSerieClick(serie: ISerie): void {
    this.props.setCurrentSerieDetail(serie);
    this.props.goToSerieDetails();
  }

  public render() {
    return (
      <div className="SeriesPage">
        <div className="SeriesPage-Tiles">
            {(this.props.series || []).map(serie => 
              <div key={`${serie.id}`} onClick={() => this.handleSerieClick(serie)}>
                <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc}/>
              </div>
            )}
        </div>
      </div>
    );
  }
}
