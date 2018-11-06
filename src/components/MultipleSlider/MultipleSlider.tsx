import * as React from 'react';
import './MultipleSlider.css';

import Typography from '@material-ui/core/Typography';

import Slider from '@material-ui/lab/Slider';
import { IGenre } from '../../interfaces';

interface IMultipleSliderProps {
    genre: IGenre[];
    onChange: (changes: any) => void;
};

interface IMultipleSliderState {
    genreScore: Array<{genre: IGenre, score: number}>;
}

export class MultipleSlider extends React.Component<IMultipleSliderProps, IMultipleSliderState> {

    constructor(props: IMultipleSliderProps){
        super(props);
        this.state = {genreScore: []};

    }

  public componentDidMount(){
      const genreScore = (this.props.genre || []).map((genre: any) => ({genre, score: 0}));
      this.setState({genreScore});

  }

  public handleChange(value: number, genre: IGenre) {
      const genreScore = (this.state.genreScore || []).map((item: any) => {
          if (item.genre.id === genre.id) {
              return {...item, score: value};
          }
          return {...item};
        });
      this.setState({genreScore});
      this.props.onChange(this.state.genreScore);
  }

  public render() {
    return (
      <div className="MultipleSlider">
        {(this.state.genreScore || []).map((genreScore, index) => 
            <div key={`${genreScore.genre.name}-${index}`} className="MultipleSlider-Bloc">
                <Typography id="label">{genreScore.genre.name}</Typography>
                <Slider
                    value={genreScore.score}
                    aria-labelledby="label"
                    onChange={(e, value) => this.handleChange(value, genreScore.genre)}
                    />
            </div>
        )}
    </div>
    );
  }
}
