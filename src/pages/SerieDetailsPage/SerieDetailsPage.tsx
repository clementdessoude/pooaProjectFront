
import * as React from 'react';
import './SerieDetailsPage.css';

import { ISeason, ISerie } from '../../interfaces';

import { DetailedSerieTile } from '../../components';

import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface ISerieDetailsPageProps {
  displayRemove: boolean;
  serie: ISerie,
  seasons: ISeason[],
  userId: string | null,
  addSerieToWatchlist: (serieId: string, userId: string) => void,
  fetchSeasons: (serieId: string) => void,
  fetchUserWatchlist: (userId: string) => void;
  removeSerieOfWatchlist: (serieId: string, userId: string) => void,
}

export class SerieDetailsPage extends React.Component<ISerieDetailsPageProps> {

  public componentWillMount() {
    this.props.fetchSeasons(this.props.serie.id);
    if (this.props.userId) {
      this.props.fetchUserWatchlist(this.props.userId);
    }
  }

  public handleIconClick() {
    if (this.props.userId) {
      if (this.props.displayRemove) {
        this.props.removeSerieOfWatchlist(this.props.serie.id, this.props.userId)
      } else {
        this.props.addSerieToWatchlist(this.props.serie.id, this.props.userId)
      }
    }
  }

  public render() {
    return (
      <div className="SerieDetailsPage">
        <div className="SerieDetailsPage-Serie">
           <DetailedSerieTile 
              title={this.props.serie.title} 
              imgSrc={this.props.serie.imgSrc} 
              description={this.props.serie.description}
              iconType={this.getIconType()}
              onIconClick={() => this.handleIconClick()}/>
        </div>
        <div className="SerieDetailsPage-Seasons">
          {(this.props.seasons || []).map((season: ISeason, index) => 
              <ExpansionPanel key={`${season.name}-${index}`}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{season.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className="SerieDetailsPage-Episodes">
                  <List>
                    {(season.episodes || []).map((episode, index2) => 
                      // <div key={`${episode.name}-${index2}`}>{episode.name}</div>
                      
                        <ListItem key={`${episode.name}-${index2}`}>
                          <ListItemIcon>
                             <Checkbox /> 
                          </ListItemIcon>
                          <ListItemText primary={`${episode.episodeNumber}-${episode.name}`} />
                          {/* <ListItemSecondaryAction>
                            <Switch
                              onChange={this.handleToggle('wifi')}
                              checked={this.state.checked.indexOf('wifi') !== -1}
                            />
                          </ListItemSecondaryAction> */}
                        </ListItem>
                      
                    )}
                    </List>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
          )}
        </div>
      </div>
    );
  }

  private getIconType() {
    if(this.props.userId){
      return this.props.displayRemove ? 'delete' : 'add';
    } else {
      return 'none';
    }
  }
}
