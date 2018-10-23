import * as React from 'react';
import './NavBar.css';

import { RouteComponentProps, withRouter } from 'react-router';
import { NavItem } from '../NavItem/NavItem';


interface INavBarProps extends RouteComponentProps<{}> {
  isLogIn: boolean;
  logOut: () => void;
}

class NavBar extends React.Component<INavBarProps> {

  private NAV_ITEMS = [
    { title: "Home", handler: () => this.props.history.push('/home') },
    { title: "Log in", handler: () => this.props.history.push('/login'), isVisible: () => !this.props.isLogIn },
    { title: "Log Out", handler: () => this.props.logOut(), isVisible: () => this.props.isLogIn },
    { title: "Register", handler: () => this.props.history.push('/register'), isVisible: () => !this.props.isLogIn },
    { title: "My List", handler: () => this.props.history.push('/watchlist'), isVisible: () => this.props.isLogIn },
    { title: "Notifications", handler: () => this.props.history.push('/notifications'), isVisible: () => this.props.isLogIn }
  ]

  public render() {
    return (
      <div className="NavBar">
        {(this.NAV_ITEMS || []).map((item, index) =>
          (item.isVisible && !item.isVisible() ?
            null
            :
            < NavItem key={`${item.title}+${index}`} title={item.title} handler={() => item.handler()} />
          )
        )}
      </div>
    );
  }
}

export default withRouter(NavBar);
