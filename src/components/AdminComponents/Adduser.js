import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';


class Adduser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            checkin: new Date(),
            checkout: new Date(),
            email:'',
            mobile:'',
            room: ''
        }
    }
    componentDidMount() {

        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        const User = {
            username: this.state.username,
            email:this.state.email,
            mobile:this.state.mobile,
            checkin: this.state.checkin,
            checkout: this.state.checkout,
            room: this.state.room,
        }
        axios.post('http://localhost:5000/user/add', User)
            .then(res => console.log(res.data));
        console.log(User);
        
        alert(`${this.state.username}` + `${this.state.email}` + `${this.state.mobile}` + `${this.state.checkin}` + `${this.state.checkout}` + `${this.state.room}` + "Added New User")
        this.setState = {
            username: '',
            email:'',
            mobile:'',
            checkin: new Date(),
            checkout: new Date(),
            room: ''
        }
    }

    render() {
        return (
            <div className="container section z-depth-5 blue-grey lighten-5">
                <div className="row">
                    <div className="col s12 m10 l6 push-l3 push-m1">
                        <h3 className="center-align"> Add New Users Details</h3>

                        <form onSubmit={this.submitHandler} >


                            <div className="row section">

                                <div className="row">

                                    <div className="input-field col s12 section">
                                        <h6>User Name</h6>
                                        <input id="username" type="text" value={this.username} name='username' onChange={this.changeHandler} className="validate"></input>
                                    </div>

                                    <div className="input-field col s12 section">
                                        <h6>User E-mail</h6>
                                        <input id="email" type="text" value={this.email} name='email' onChange={this.changeHandler} className="validate"></input>
                                    </div>

                                    <div className="input-field col s12 section">
                                        <h6>Mobile Number</h6>
                                        <input id="mobileno" type="text" value={this.mobile} name='mobile' onChange={this.changeHandler} className="validate"></input>
                                    </div>

                                    

                                    <div className="input-field col s6 section">
                                        <h6>Check-in Date</h6>
                                        <input id="checkin" placeholder="DD/MM/YYYY" type="date" value={this.checkin} name='checkin' onChange={this.changeHandler} className="validate"></input>
                                    </div>

                                    <div className="input-field col s6 section">
                                        <h6>Check-out Date </h6>
                                        <input id="checkout" placeholder="DD/MM/YYYY" type="date" value={this.checkout} name='checkout' onChange={this.changeHandler} className="validate"></input>
                                        
                                    </div>

                                    <div className="input-field col s12 section">
                                        <h6>Room Number</h6>
                                        <input id="room" type="text" value={this.room} name='room' onChange={this.changeHandler} className="validate"></input>



                                    </div>
                                </div>
                            </div>
                            <div className="center">
                                <button className="btn-small">Submit</button>
                            </div>






                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Adduser
