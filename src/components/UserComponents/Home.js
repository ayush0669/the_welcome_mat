import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="grey lighten-4">
                <div className="container section">
                    <div className="row">
                        <div className="col s12 m6 l4">
                            <div className="card small hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" alt="card" src="../images/food.jpg" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Order Food<i className="material-icons blue-text right">info</i></span>
                                    <Link to={"/user/"+this.props.match.params.id+"/food"} class="btn-floating waves-effect waves-light right"><i class="material-icons">arrow_right_alt</i></Link>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Order Food<i className="material-icons right">close</i></span>
                                    <blockquote>Bless this meal 'once'!!</blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card small hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator responsive-img" alt="card" src="../images/laundry.jfif" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Laundry<i className="material-icons blue-text right">info</i></span>
                                    <Link to={"/user/"+this.props.match.params.id+"/laundary"} class="btn-floating waves-effect waves-light right"><i class="material-icons">arrow_right_alt</i></Link>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Laundry<i className="material-icons right">close</i></span>
                                    <blockquote>Loving your clothes the way you love them!</blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4">
                            <div className="card small hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator responsive-img" alt="card" src="../images/hk2.jpg" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Housekeeping<i className="material-icons blue-text right">info</i></span>
                                    <Link to={"/user/"+this.props.match.params.id+"/housekeeping"} class="btn-floating waves-effect waves-light right"><i class="material-icons">arrow_right_alt</i></Link>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Housekeeping<i className="material-icons right">close</i></span>
                                    <blockquote>Looking for a beautiful place? We make your place beautiful!</blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4 push-l2">
                            <div className="card small hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator responsive-img" alt="card" src="../images/support.png" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Support & Maintenance<i className="material-icons blue-text right">info</i></span>
                                    <Link to={"/user/"+this.props.match.params.id+"/support"} class="btn-floating waves-effect waves-light right"><i class="material-icons">arrow_right_alt</i></Link>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Support & Maintenance<i className="material-icons right">close</i></span>
                                    <blockquote>What creates a problem is not important, how it gets solved is!</blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4 push-l2">
                            <div className="card small hoverable">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator responsive-img" alt="card" src="../images/internet.jpg" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Internet<i className="material-icons blue-text right">info</i></span>
                                    <Link to={"/user/"+this.props.match.params.id+"/internet"} class="btn-floating waves-effect waves-light right"><i class="material-icons">arrow_right_alt</i></Link>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Internet<i className="material-icons right">close</i></span>
                                    <blockquote>At your service to ensure uninterrupted connectivity!</blockquote>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default Home
