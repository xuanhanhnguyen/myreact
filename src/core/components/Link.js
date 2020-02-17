import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item">
                <NavLink className="nav-link" to={this.props.path}>{this.props.text}</NavLink>
            </li>
        );
    }
}

export default Link;