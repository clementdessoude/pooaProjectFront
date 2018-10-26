
import * as React from 'react';
import { INotification } from '../../interfaces';
import './NotificationsPage.css';

import { Notification } from '../../components';

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
        <div className="NotificationsPage-NotifsContainer">
            {(this.props.notifications || []).map((notif, index) => 
                <Notification key={`${notif.message}-${index}`} imgSrc={"test"} message={notif.message}/>
            )}
        </div>
      </div>
    );
  }
}
