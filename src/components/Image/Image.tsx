import * as React from 'react';
import './Image.css';

interface IImageProps {
    imgSrc: string;
};

export class Image extends React.Component<IImageProps> {
  public render() {
    return (
      <div className="Image" style={{backgroundImage: `url(${this.props.imgSrc})`}}/>
    );
  }
}
