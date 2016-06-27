import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from "./nav/NavBar";

const navLinks = [
    {
        title: "Video",
        href: "/video"
    },{
        title: "Book",
        href: "/book"
    },{
        title: "Weather",
        href: "/weather"
    }
];

export default class App extends Component
{
    render()
    {
        return (
            <div>
                <NavBar bgColor="#fff"
                        titleColor="#3097d1"
                        navData={navLinks} />
                <div className="row">
                    <div className="col-sm-12">{this.props.children}</div>
                </div>
            </div>
        );
    }
}
