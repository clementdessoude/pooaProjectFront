
import * as React from 'react';
import './SeriesPage.css';

import { SerieTile } from '../../components';
import { ISerie } from '../../interfaces';

interface ISeriesPageProps {
  fetchSeries: () => void,
  series: ISerie[]
}

export class SeriesPage extends React.Component<ISeriesPageProps> {

  public componentDidMount(){
    this.props.fetchSeries();
  }

  public render() {
    return (
      <div className="SeriesPage">
        <div className="SeriesPage-Tiles">
            {(this.props.series || []).map(serie => 
              <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc} />
            )}
        </div>
      </div>
    );
  }
}
