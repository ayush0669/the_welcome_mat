import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            checkin: '',
            checkout: '',
            email: '',
            mobile: '',
            room: ''
        }
    }
    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        axios.get('http://localhost:5000/user/'+this.props.match.params.id)
            .then(resp => {
                this.setState({
                    username: resp.data.username,
                    checkin: resp.data.checkin,
                    checkout: resp.data.checkout,
                    email: resp.data.email,
                    mobile: resp.data.mobile,
                    room: resp.data.room
                })
            });
    }
    render() {
        return (
            <div class="container section row">
                <div>
                    <img src="../../images/user.png" alt="user" class="circle col s4"></img>
                </div>
                <div class="col s12 l8 push-l2" >
                    <div>
                        <p>
                            <span>
                                <h3><b>{this.state.username}</b></h3>
                            </span>
                        </p>
                    </div>
                    <div>
                        <p><span><i class="material-icons left small">email</i><h5>{this.state.email}</h5></span></p>
                    </div>
                    <div>
                        <p><span><i class="material-icons left small">phone</i><h5>{this.state.mobile}</h5></span></p>
                    </div>
                    <div>
                        <p><span><i class="material-icons left small">house</i><h5>Hotel and Room Details:</h5>
                            <h6>&emsp;&emsp;&emsp;&emsp;Hotel Name&emsp;&emsp; :&emsp;<b>NomadGao&emsp;&emsp;<br></br></b>&emsp;&emsp;&emsp;&emsp;Room Number&emsp;:&emsp;<b>{/*340B*/}{this.state.room}</b></h6></span></p>
                    </div>
                    <div>
                        <p><span><i class="material-icons left small">access_time</i><h5>Checkin Details:</h5>
                            <h6>&emsp;&emsp;&emsp;&emsp;Check-in date&emsp;:<b>&emsp;{this.state.checkin.substring(0, 10)}</b><br></br>&emsp;&emsp;&emsp;&emsp;Check-in time&emsp;:<b>&emsp;22:10:55 IST </b></h6></span></p>
                    </div>
                    {/* <div>
    <p><span><i class="material-icons left small">assignment</i><h5>Billing Details:</h5>
    <h6>&emsp;&emsp;&emsp;&emsp;Total Amount &emsp;:<b> &emsp;₹ 10000</b><br></br></h6></span></p>
</div> */}
                    <div>
                        <p><span><i class="material-icons left small">access_time</i><h5>Check-out Details:</h5>
                            <h6>&emsp;&emsp;&emsp;&emsp;Check-out date&emsp;:<b>&emsp;{/*24/02/2021*/}{this.state.checkout.substring(0, 10)}</b><br></br>&emsp;&emsp;&emsp;&emsp;&emsp;</h6></span></p>
                    </div>
                </div>
                {/* )} */}
            </div>
        )
    }
}

export default Profile
