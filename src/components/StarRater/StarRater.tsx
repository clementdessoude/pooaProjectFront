import * as React from 'react';
import './StarRater.css';

import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';


interface IStarRaterProps {
    value: number; // between 0 and 5 
    onChange: (value: number) => void;
};

export class StarRater extends React.Component<IStarRaterProps> {

  public handleStarClick(value: number) {
      if (value === 1 && this.props.value === 1) {
          value = 0;
      }
      this.props.onChange(value);
  }


  public render() {
    const starCount = [1,2,3,4,5];
    return (
      <div className="StarRater-container">
        {starCount.map(i => 
            (i <= this.props.value ? <Star key={i} onClick={() => this.handleStarClick(i)}/> : <StarBorder key={i} onClick={() => this.handleStarClick(i)}/>)
        )}
      </div>
    );
  }
}
