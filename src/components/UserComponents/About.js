import React, { Component } from 'react'
import M from 'materialize-css';

export class AboutUs extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
    }
    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img src="../../images/title.png"></img></div>
                </div>

                <div className="section">
                    <div className="row container">
                        <div className="col l6 push l3">
                            <h2 className="brand-logo" style={{ fontFamily: "Lobster" }}><u>About Us</u></h2>
                            <p className="brand-logo" style={{ fontFamily: "Lobster" }}>We are the students of Computer Science from Nagpur who worked on this project to give the guests some extra comfort on their holidays.This project is done in association with Nomadgao, a company based in Goa.
                            Here are some details about the team.
                         </p>
                            <ul className="brand-logo" typeof="square" style={{ fontFamily: "Lobster" }}>
                                <li><i class="material-icons">subdirectory_arrow_right</i>Paritosh Dandekar</li>
                                <li><i class="material-icons">subdirectory_arrow_right</i>Muskan Gupta</li>
                                <li><i class="material-icons">subdirectory_arrow_right</i>Anjali Rajendran</li>
                                <li><i class="material-icons">subdirectory_arrow_right</i>Kunal Thorane</li>
                                <li><i class="material-icons">subdirectory_arrow_right</i>Ayush Gupta</li>
                            </ul>
                        </div>
                        <div>
                            <div className>
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-3" >
                                        <div className="card-content white-text">
                                            <span className="card-title"><i class="fa fa-github"></i><b>GitHub</b></span>
                                            <p></p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#"><i class="material-icons">link</i>Our repository link.</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-3">
                                        <div className="card-content white-text">
                                            <span className="card-title"><b>E-mail</b></span>
                                            <p></p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#">Email us here.</a>

                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src="../../images/title.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
