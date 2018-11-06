
import * as React from 'react';
import './RecommandationPage.css';

import CircularProgress from '@material-ui/core/CircularProgress';

import { MultipleSlider, SerieTile } from '../../components';

import { IGenre, ISerie } from '../../interfaces';

interface IRecommandationPageState {
    timeout: any;
    loading: boolean;
}


interface IRecommandationPageProps {
  addSerieToWatchlist: (serieId: string, userId: string) => void;
  displayRemoveSerie: (serie: ISerie) => boolean;
  genres: IGenre[];
  recommandedSeries: ISerie[];
  fetchGenres: () => void;
  fetchRecommandedSeries: (genreScore: Array<{genre: IGenre, score: number}>) => void;
  fetchUserWatchlist: (userId: string) => void;
  goToSerieDetails: () => void;
  removeSerieOfWatchlist: (serieId: string, userId: string) => void;
  setCurrentSerieDetail: (serie: ISerie) => void;
  userId: string | null;
}

export class RecommandationPage extends React.Component<IRecommandationPageProps,IRecommandationPageState> {

    constructor(props: IRecommandationPageProps){
        super(props);
        this.state = {timeout: null, loading: false};
    }

    public componentWillMount() {
        this.props.fetchGenres();
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

    public onMultipleSliderChange(genreScore: any) {
        clearTimeout(this.state.timeout);
        const timeout = setTimeout(() => {
            this.props.fetchRecommandedSeries(genreScore);
            setTimeout(() => this.setState({loading: false}), 600);
        }, 1300);
        this.setState({timeout, loading: true});
    }

    public render() {
        return (
        <div className="RecommandationPage">
            Recommandation
            <div>
                Genre selectors
                <MultipleSlider genre={this.props.genres} onChange={(genreScore) => this.onMultipleSliderChange(genreScore)}/>
            </div>
            <div>
                {this.state.loading ?
                    <CircularProgress size={50} />
                :
                    <div className="SeriesPage-Tiles">
                        {(this.props.recommandedSeries || []).map((serie: ISerie, index) => 
                            <div key={`${serie.id}-${index}`} onClick={() => this.handleSerieClick(serie)}>
                                <SerieTile key={`${serie.id}`} title={serie.title} imgSrc={serie.imgSrc} iconType={this.getIconType(serie)} onIconClick={(e) => this.handleIconClick(e, serie)}/>
                            </div>
                        )}
                    </div>
                }
            </div>
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
