import * as React from 'react';
import './NavBar.css';

// import { RouteComponentProps } from 'react-router';
// import { NavItem } from '../NavItem/NavItem';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import DraftsIcon from '@material-ui/icons/Drafts';
import Home from '@material-ui/icons/Home';
import HowToReg from '@material-ui/icons/HowToReg';
import ListAlt from '@material-ui/icons/ListAlt';
import Notifications from '@material-ui/icons/Notifications';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Stars from '@material-ui/icons/Stars';

import ExitToApp from '@material-ui/icons/ExitToApp';

interface INavBarProps {
  isLogIn: boolean;
  logOut: () => void;
  pushNavigation: (path: string) => void;
}

class NavBar extends React.Component<INavBarProps> {

  private NAV_ITEMS = [
    { title: "Home", handler: () => this.props.pushNavigation('/home'), icon: Home },
    { title: "Log in", handler: () => this.props.pushNavigation('/login'), isVisible: () => !this.props.isLogIn, icon: PermIdentity },
    { title: "Log Out", handler: () => this.props.logOut(), isVisible: () => this.props.isLogIn, icon: ExitToApp },
    { title: "Register", handler: () => this.props.pushNavigation('/register'), isVisible: () => !this.props.isLogIn, icon: HowToReg },
    { title: "My List", handler: () => this.props.pushNavigation('/watchlist'), isVisible: () => this.props.isLogIn, icon: ListAlt },
    { title: "Recommandation", handler: () => this.props.pushNavigation('/recommandation'), isVisible: () => this.props.isLogIn, icon: Stars },
    { title: "Notifications", handler: () => this.props.pushNavigation('/notifications'), isVisible: () => this.props.isLogIn, icon: Notifications }
  ]

  public render() {
    return (
      <div className="NavBar">
        <List component="nav">
          {(this.NAV_ITEMS || []).map((item, index) =>
            (item.isVisible && !item.isVisible() ?
              null
              :
              // < NavItem key={`${item.title}+${index}`} title={item.title} handler={() => item.handler()} />
              <ListItem key={`${item.title}+${index}`} button={true} onClick={() => item.handler()}>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            )
          )}
        </List>
        {/* <ListItem button={true}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List> */}
      </div>
    );
  }
}

export default NavBar;
