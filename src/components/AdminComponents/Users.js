import React, { Component } from 'react'
import axios from 'axios';
import M, { Timepicker } from 'materialize-css';

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
            
        }   
    }
    componentDidMount() {   
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        axios.get('http://localhost:5000/user/')
            .then(resp => {
                this.setState({
                    users: resp.data
                })
            })
    }
    render() {
        return (
            <div>
                <div className="  container section z-depth-5 blue-grey lighten-4  " >
                    <h2 className="center-align ">All Users Details</h2>
                    <table className="highlight">
                        <thead>
                            <tr className="section">
                                {/* <th>Sr No.</th> */}
                                <th>Username</th>
                                <th>Checkin Date</th>
                                <th>Checkout Date</th>
                                <th>Room Number</th>   
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => {
                                return <tr>
                                    {/* <td className="center">{user.number}</td> */}
                                    <td>{user.username}</td>
                                    <td>{user.checkin.substring(0, 10)}</td>
                                    <td>{user.checkout.substring(0, 10)}</td>
                                    <td>{user.room}</td>
                                    
                                </tr>;
                            })}
                        </tbody>
                    </table>
                   
                </div >
            </div >
        )
    }
}

export default Users
