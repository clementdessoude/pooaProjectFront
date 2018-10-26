import * as React from 'react';
import './NavBar.css';

// import { RouteComponentProps } from 'react-router';
import { NavItem } from '../NavItem/NavItem';


interface INavBarProps {
  isLogIn: boolean;
  logOut: () => void;
  pushNavigation: (path: string) => void;
}

class NavBar extends React.Component<INavBarProps> {

  private NAV_ITEMS = [
    { title: "Home", handler: () => this.props.pushNavigation('/home') },
    { title: "Log in", handler: () => this.props.pushNavigation('/login'), isVisible: () => !this.props.isLogIn },
    { title: "Log Out", handler: () => this.props.logOut(), isVisible: () => this.props.isLogIn },
    { title: "Register", handler: () => this.props.pushNavigation('/register'), isVisible: () => !this.props.isLogIn },
    { title: "My List", handler: () => this.props.pushNavigation('/watchlist'), isVisible: () => this.props.isLogIn },
    { title: "Notifications", handler: () => this.props.pushNavigation('/notifications'), isVisible: () => this.props.isLogIn }
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

export default NavBar;
