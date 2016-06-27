import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hover: false
        };
    }

    mouseOver(){
        this.setState({
            hover: true
        });
    }

    mouseOut(){
        this.setState({
            hover: false
        });
    }

    render() {
        return (
            <li className={this.state.hover? "active" : ""}
                onMouseOver={(event) => this.mouseOver(event)}
                onMouseOut={(event) => this.mouseOut(event)}>
                <Link style={this.props.aStyle} to={this.props.href}>
                    {this.props.title}
                </Link>
            </li>
        )
    }
}