import * as React from 'react';
import './SerieTile.css';

import { Image } from '../Image/Image';

interface ISerieTileProps {
    title: string;
    imgSrc: string;
};

export class SerieTile extends React.Component<ISerieTileProps> {
  public render() {
    return (
      <div className="SerieTile">
        <span>{this.props.title}</span>
        <div className="SerieTile-ImageContainer">
            <Image imgSrc={this.props.imgSrc}/>
        </div>
      </div>
    );
  }
}
