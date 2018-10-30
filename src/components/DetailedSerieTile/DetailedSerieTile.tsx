import * as React from 'react';
import './DetailedSerieTile.css';

import Button from '@material-ui/core/Button';

import Chip from '@material-ui/core/Chip';

import { Image } from '../Image/Image';



interface IDetailedSerieTileProps {
    title: string;
    description: string;
    imgSrc: string;
    iconType: 'add' | 'delete' | 'none';
    genres?: string[];
    onIconClick: () => void;
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
                <span className="DetailedSerieTile-DescriptionText">{this.props.description}</span>
                <div className="DetailedSerieTile-Genres">
                {(this.props.genres || []).map((genre, index) => 
                    // <span key={`${genre}-${index}`}>{genre}</span>
                    <Chip
                        key={`${genre}-${index}`}
                        label={genre}
                        color="secondary"
                        className="DetailedSerieTile-GenreChip"
                    />
                )}
                </div>
                {this.props.iconType === 'none' ? null :
                    // <Button variant="fab" color="primary" aria-label="Add" className="DetailedSerieTile-Add" 
                    //     onClick={() => this.props.onIconClick()}>
                    //     {this.props.iconType === 'add' ? <AddIcon /> : <Cancel />}
                    // </Button>
                    <Button variant="contained" color="primary" className="DetailedSerieTile-Add"
                        onClick={() => this.props.onIconClick()}>
                        {this.props.iconType === 'add' ? "Add To Watchlist" : "Remove From Watchlist"}
                    </Button>
                }
            </div>
        </div>
      </div>
    );
  }
}
