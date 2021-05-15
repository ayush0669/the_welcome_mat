import React, { Component } from 'react';
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import '../Login.css';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            users: [],
            final: ''
        }
    }

    componentDidMount() {
        var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password
        }
        if (this.state.username == "admin@a.com" && this.state.password == "admin") {
            this.props.history.push("/admin/")
        } else {

            axios.post('http://localhost:5000/user/find', login)
                .then(resp => {
                    if (resp.data.length > 0) {
                    this.state.final = resp.data[0]._id;
                    // this.setState({
                    //     users: resp.data
                    // })
                    // {this.state.users.map((item) => {
                    //     console.log(item.username)
                    // })}
                    // const last = this.state.users[0].slice();

                    console.log(this.state.final)
                    // this.props.history.push("/user/"+this.state.final )
                    this.props.history.push("/user/"+this.state.final,{id:this.state.final})}
                    else{
                        alert("You have entered wrong username or password.");
                        //this.props.history.push("/")
                        this.forceUpdate();
                        e.target.reset();
                    }
                });
        }
        // alert(`${this.state.users[0].username}`+ `${this.state.username}` + " " +`${this.state.password}` + "  User Welcome" +`${this.state.userId}`)
        // alert("  okay "+ this.state.users[0].username)
        this.setState = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div >
                
                <img src="../images/login1.jpg"  className="responsive-img imggg" />
                
                <div className="row banner-text center">
                    <span>
                        <div className="col s6 logg ">
                            <a className="brand-logo" style={{ fontFamily: "Lobster", color: "black", fontSize: "70px" }}>The Welcome Mat</a>
                            <h5>Come in as guests,<br></br>leave as a family...</h5>
                            <h5></h5>
                        </div>


                        <div className="vl col s1 left"></div>

                        <div className="col s3 z-depth-5 loginform container" >
                            <form onSubmit={this.submitHandler}>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="   " id="username" type="email" className="validate white-text" value={this.username} name='username' onChange={this.changeHandler} ></input>
                                        <label for="username" className="white-text section texta">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="   " id="password" type="password" className="validate white-text" value={this.password} name='password' onChange={this.changeHandler}></input>
                                        <label for="password" className="white-text section texta">Password</label>
                                    </div>
                                </div>
                                <div className="center section">
                                    <button className="btn-small">Login</button>
                                </div>

                            </form>
                        </div>
                    </span>
                </div>
            </div>
        )
    }

}
export default Login
