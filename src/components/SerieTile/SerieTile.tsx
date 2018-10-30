import * as React from 'react';
import './SerieTile.css';

import { Image } from '../Image/Image';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Cancel from '@material-ui/icons/Cancel';

interface ISerieTileProps {
    title: string;
    imgSrc: string;
    iconType: 'add' | 'delete' | 'none';
    onIconClick: (e: any) => void;
};

export class SerieTile extends React.Component<ISerieTileProps> {
  public render() {
    return (
      <div className="SerieTile">
        <div className="SerieTile-ImageContainer">
            <Image imgSrc={this.props.imgSrc}/>
            {this.props.iconType === 'none' ? null :
                <Button mini={true} variant="fab" color="primary" aria-label="Add" className="SerieTile-Add" 
                    onClick={(e) => this.props.onIconClick(e)}>
                    {this.props.iconType === 'add' ? <AddIcon /> : <Cancel />}
                </Button>
            }
        </div>
        <span className="SerieTile-Title">{this.props.title}</span>
      </div>
    );
  }
}
