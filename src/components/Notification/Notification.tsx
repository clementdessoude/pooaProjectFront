import * as React from 'react';
import './Notification.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface INotificationProps {
    message: string;
    imgSrc: string;
};

export class Notification extends React.Component<INotificationProps> {
  public render() {
    return (
      <div className="Notification">
        <Card className="Notification-Card">
            <CardActionArea>
                <CardMedia
                    className="Notification-CardMedia"
                    image={this.props.imgSrc}
                    title="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom={true} variant="h5" component="h2">
                    {this.props.message}
                </Typography>
                <Typography component="p">
                    {this.props.message}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Mark as Seen
                </Button>
            </CardActions>
        </Card>
      </div>
    );
  }
}
