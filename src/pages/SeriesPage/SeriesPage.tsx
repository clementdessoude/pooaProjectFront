
import * as React from 'react';
import './SeriesPage.css';

import SearchIcon from '@material-ui/icons/Search';

import TablePagination from '@material-ui/core/TablePagination';

import CircularProgress from '@material-ui/core/CircularProgress';

import InputBase from '@material-ui/core/InputBase';

import { SerieTile } from '../../components';
import { ISerie } from '../../interfaces';

interface ISeriesPageState {
  timeout: any;
  loading: boolean;
  pageNumber: number;
  seriesPerPage: number;
  searching: boolean;
}

interface ISeriesPageProps {
  addSerieToWatchlist: (serieId: string, userId: string) => void;
  displayRemoveSerie: (serie: ISerie) => boolean;
  userId: string | null;
  fetchSeries: (pageNumber: number, seriesPerPage: number) => void;
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
    this.state = {timeout: null, loading: false, pageNumber: 0, seriesPerPage: 20, searching: false};
  }


  public componentWillMount() {
    this.refreshSeries(this.state.pageNumber, this.state.seriesPerPage);
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
          this.props.fetchSeries(this.state.pageNumber, this.state.seriesPerPage);
        }
        setTimeout(() => this.setState({loading: false}), 700);
    }, 1000);
    this.setState({timeout, loading: true, searching: name !== '' ? true : false});
  }

  public handlePageChange(pageNumber: number) {
      this.setState({...this.state, pageNumber, loading: true});
      this.refreshSeries(pageNumber, this.state.seriesPerPage);
  }

  public handleSeriesPerPageChange(seriesPerPage: any) {
    this.setState({...this.state, seriesPerPage, loading: true});
    this.refreshSeries(this.state.pageNumber, seriesPerPage);
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
          <div>
            <div className="SeriesPage-Tiles">
                {(this.props.series || []).map(serie => 
                  <div key={`${serie.id}`} onClick={() => this.handleSerieClick(serie)}>
                    <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc} iconType={this.getIconType(serie)} onIconClick={(e) => this.handleIconClick(e, serie)}/>
                  </div>
                )}
            </div>
            {!this.state.searching ?
                <TablePagination
                component="div"
                count={200}
                rowsPerPage={this.state.seriesPerPage}
                page={this.state.pageNumber}
                backIconButtonProps={{
                  'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                  'aria-label': 'Next Page',
                }}
                rowsPerPageOptions={[10,20,30]}
                onChangePage={(e, pageNumber) => this.handlePageChange(pageNumber)}
                onChangeRowsPerPage={(e) => this.handleSeriesPerPageChange(e.target.value)}
              />
            : null }
            
          </div>
        }
      </div>
    );
  }

  private refreshSeries(pageNumber: number, seriesPerPage: number) {
    this.props.fetchSeries(pageNumber, seriesPerPage);
    if (this.props.userId) {
      this.props.fetchUserWatchlist(this.props.userId);
    }
    setTimeout(() => this.setState({loading: false}), 700);
  }

  private getIconType(serie: ISerie) {
    if(this.props.userId){
      return this.props.displayRemoveSerie(serie) ? 'delete' : 'add';
    } else {
      return 'none';
    }
  }
}
