
import * as React from 'react';
import './NotificationsPage.css';

import { ISerie } from '../../interfaces';

interface INotificationsPageProps {
  seriesInWatchList: ISerie[]
}

export class NotificationsPage extends React.Component<INotificationsPageProps> {

  public render() {
    return (
      <div className="NotificationsPage">
        NOTIFICATIONS PAGE
      </div>
    );
  }
}
