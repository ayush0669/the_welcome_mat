import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export class NavbarAdmin extends Component {
    render() {
        return (
            <div>
                
                <div className="navbar navbar-fixed">
                    <nav className="cyan darken-4">
                        <div className="nav-wrapper container" >
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger "><i className="material-icons">menu</i></a>
                        </div>
                    </nav>  
                </div>
            </div>
        )
    }
}

export default NavbarAdmin
