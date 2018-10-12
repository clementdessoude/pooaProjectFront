import * as React from 'react';
import './NavBar.css';

import { NavItem } from '../NavItem/NavItem';

interface INavBarProps {
    navItems: Array<{title: string; handler: () => void }>;
};

export class NavBar extends React.Component<INavBarProps> {
  public render() {
    return (
      <div className="NavBar">
        {(this.props.navItems || []).map((item, index) => 
            <NavItem key={`${item.title}+${index}`} title={item.title} handler={() => item.handler()}/>
        )}
      </div>
    );
  }
}
