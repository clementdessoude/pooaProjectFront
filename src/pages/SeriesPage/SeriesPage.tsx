
import * as React from 'react';
import './SeriesPage.css';

import SearchIcon from '@material-ui/icons/Search';

import CircularProgress from '@material-ui/core/CircularProgress';

import InputBase from '@material-ui/core/InputBase';

import { SerieTile } from '../../components';
import { ISerie } from '../../interfaces';

interface ISeriesPageState {
  timeout: any;
  loading: boolean;
}

interface ISeriesPageProps {
  addSerieToWatchlist: (serieId: string, userId: string) => void;
  displayRemoveSerie: (serie: ISerie) => boolean;
  userId: string | null;
  fetchSeries: () => void;
  fetchSeriesName: (name: string) => void;
  fetchUserWatchlist: (userId: string) => void;
  removeSerieOfWatchlist: (serieId: string, userId: string) => void;
  goToSerieDetails: () => void;
  setCurrentSerieDetail: (serie: ISerie) => void;
  series: ISerie[];
}

export class SeriesPage extends React.Component<ISeriesPageProps, ISeriesPageState> {

  constructor(props: ISeriesPageProps){
    super(props);
    this.state = {timeout: null, loading: false};
}


  public componentWillMount() {
    this.props.fetchSeries();
    if (this.props.userId) {
      this.props.fetchUserWatchlist(this.props.userId);
    }
  }

  public handleSerieClick(serie: ISerie): void {
    this.props.setCurrentSerieDetail(serie);
    this.props.goToSerieDetails();
  }

  public handleIconClick(e: any, serie: ISerie) {
    e.stopPropagation();
    if (this.props.userId) {
      if (this.props.displayRemoveSerie(serie)) {
        this.props.removeSerieOfWatchlist(serie.id, this.props.userId);
      } else {
        this.props.addSerieToWatchlist(serie.id, this.props.userId);
      }
      this.props.fetchUserWatchlist(this.props.userId);
    }
    
  }

  public handleSearch(name: string) {
    clearTimeout(this.state.timeout);
    const timeout = setTimeout(() => {
        if (name) {
          this.props.fetchSeriesName(name);
        } else {
          this.props.fetchSeries();
        }
        setTimeout(() => this.setState({loading: false}), 700);
    }, 1000);
    this.setState({timeout, loading: true});
  }

  public render() {
    return (
      <div className="SeriesPage">
      <div className="SeriesPage-SearchBar">
              <div className="SeriesPage-SearchIcon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={(e) => this.handleSearch(e.target.value)}
              />
        </div>
        {this.state.loading ?
                  <div className="SeriesPage-Loader" >
                    <CircularProgress size={50} />
                  </div>
                :
          <div className="SeriesPage-Tiles">
              {(this.props.series || []).map(serie => 
                <div key={`${serie.id}`} onClick={() => this.handleSerieClick(serie)}>
                  <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc} iconType={this.getIconType(serie)} onIconClick={(e) => this.handleIconClick(e, serie)}/>
                </div>
              )}
          </div>
        }
      </div>
    );
  }

  private getIconType(serie: ISerie) {
    if(this.props.userId){
      return this.props.displayRemoveSerie(serie) ? 'delete' : 'add';
    } else {
      return 'none';
    }
  }
}
