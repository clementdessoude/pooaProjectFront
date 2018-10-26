
import * as React from 'react';
import { INotification } from '../../interfaces';
import './NotificationsPage.css';

interface INotificationsPageProps {
  userId: string;
  notifications: INotification[];
  fetchUserNotifications: (userId: string) => void;
}

export class NotificationsPage extends React.Component<INotificationsPageProps> {

  public componentWillMount() {
    this.props.fetchUserNotifications(this.props.userId);
  }

  public render() {
    return (
      <div className="NotificationsPage">
        NOTIFICATIONS PAGE
        {this.props.notifications}
      </div>
    );
  }
}
