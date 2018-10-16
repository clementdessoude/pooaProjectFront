import * as React from 'react';
import './DetailedSerieTile.css';

import { Image } from '../Image/Image';

interface IDetailedSerieTileProps {
    title: string;
    description: string;
    imgSrc: string;
};

export class DetailedSerieTile extends React.Component<IDetailedSerieTileProps> {
  public render() {
    return (
      <div className="DetailedSerie">
        <div className="DetailedSerieTileContainer">
            <div className="DetailedSerieTile-ImageContainer">
                <Image imgSrc={this.props.imgSrc}/>
            </div>
            <div className="DetailedSerieTile-Description">
                <span className="DetailedSerieTile-Title"> {this.props.title} </span>
                <span>{this.props.description}</span>
            </div>
        </div>
      </div>
    );
  }
}
