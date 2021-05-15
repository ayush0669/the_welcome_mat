import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer blue-grey darken-4">
                    <div className="container">
                        <div className="row">
                            {/* WELCOME MAT */}
                            <div className="col l3 s12 ">
                                <h5 className="white-text " style={{ fontFamily: "Lobster" }}>The Welcome Mat</h5>
                                <p className="grey-text text-lighten-4">Come in as Guests.
                                <br></br> Leave as Family.</p>
                            </div>

                            {/* CONTACT */}
                            <div className="col l2 s12 ">
                                {/* <h6 className="material-icons text-lighten-3" >local_phone</h6> */}
                                <h6><i className="tiny material-icons text-lighten-3">local_phone</i><span> Contact Us</span></h6>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" >1111111111</a></li>
                                    <li><a className="grey-text text-lighten-3" >2222222222</a></li>
                                    <li><a className="grey-text text-lighten-3" >3333333333</a></li>
                                </ul>
                            </div>

                            {/* LINKS */}
                            <div className="col l2 s12 ">
                                <h6 className="white-text"><i className="tiny material-icons text-lighten-3">cloud</i><span> Links</span></h6>

                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">FAQ's</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Terms and Conditions</a></li>
                                </ul>
                            </div>

                            {/* VISIT */}
                            <div className="col l5  s12 ">
                                <h6 className="white-text"><i className="tiny material-icons text-lighten-3">fmd_good</i><span> Visit</span></h6>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" >
                                        Shri Ramdeobaba College of Engineering and Management,<br></br></a></li>
                                    <li><a className="grey-text text-lighten-3" >Katol Road,<br></br></a></li>
                                    <li><a className="grey-text text-lighten-3" >Nagpur,<br></br></a></li>
                                    <li><a className="grey-text text-lighten-3" >Maharashtra 440013<br></br></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2021 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
