import React, { Component } from 'react';
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export class Sidenav extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }
    render() {
        return (
            <div> 
                <ul id="mobile-demo" className="sidenav sidenav-fixed blue-grey darken-4">
                    <nav className="cyan darken-4">
                        <div className="nav-wrapper container " >
                            <Link to="/admin" className="brand-logo" style={{ fontFamily: "Lobster" , fontSize:"30px"}}>The Welcome Mat</Link>
                        </div>
                    </nav>
                    
                    
                    <li><Link to="/admin" className="white-text"><i class="material-icons white-text">home</i>Home</Link></li>
                    <li><a href="#!" className="white-text"> <i class="material-icons white-text">show_chart</i>Statistics</a></li>
                    <li><Link to="/admin/menu" className="white-text"><i class="material-icons white-text">restaurant_menu</i>Change Menu</Link></li>
                    <li><Link to="/admin/invoice"  className="white-text"><i class="material-icons white-text">home</i>Billing</Link></li>
                    <li><Link to="/admin/Adduser"  className="white-text"><i class="material-icons white-text">person_add</i>Add User</Link></li>
                    <li><Link to="/admin/Users" className="white-text"><i class="material-icons white-text">person</i>Show User</Link></li>
                    <li><Link to="/" className="white-text"><i class="material-icons white-text">logout</i>Logout</Link></li>
                    {/* <li><Link to="/Billing"  className="white-text">Billing of Order History</Link></li>
                        <li><Link to="/Statistics"  className="white-text">Statistics</Link></li> */}
                    {/* <li><Link to="/ChangeMenu"  className="white-text">Change Menu</Link></li> */}
                    
                    
                </ul>

            </div >
        )
    }
}

export default Sidenav
