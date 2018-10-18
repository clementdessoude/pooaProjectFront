import * as React from 'react';
import './NavBar.css';

import { RouteComponentProps, withRouter } from 'react-router';
import { NavItem } from '../NavItem/NavItem';


interface INavBarProps extends RouteComponentProps<{}> {
  isLoginVisible: boolean;
}

class NavBar extends React.Component<INavBarProps> {

  private NAV_ITEMS = [
    { title: "home", handler: () => this.props.history.push('/Home') },
    { title: "Log in", handler: () => this.props.history.push('/login'), isVisible: () => this.props.isLoginVisible },
    { title: "Register", handler: () => this.props.history.push('/register') },
    { title: "My List", handler: () => true },
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
