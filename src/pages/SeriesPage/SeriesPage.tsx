
import * as React from 'react';
import './SeriesPage.css';

import { SerieTile } from '../../components';
import { ISerie } from '../../interfaces';

// const IMG_SRC = "http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/06/the-flash-season-5.jpg?itok=B-iOwm2r";

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
        I'm the series page
        <div className="SeriesPage-Tiles">
            {(this.props.series || []).map(serie => 
              <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc} />
            )}
        </div>
      </div>
    );
  }
}
