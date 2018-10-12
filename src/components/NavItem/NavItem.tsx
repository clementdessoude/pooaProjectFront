import * as React from 'react';
import './NavItem.css';


export interface INavItemProps {
    title: string;
    handler: () => void;
};

export class NavItem extends React.Component<INavItemProps> {

    public render() {
        return (
        <div className="NavItem" onClick={() => this.props.handler()}>
            {this.props.title}
        </div>
        );
    }
}
