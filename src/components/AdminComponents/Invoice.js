import React, { Component } from 'react'
import axios from 'axios';

export class Invoice extends Component {
    state = {
        data: [],
    }
    constructor(props) {
        super(props)

        this.state = {
            billingO: [],
            userO: []

        }
    }





    componentDidMount() {
        this.getData();


    }

    getData = () => {
        axios.get('http://localhost:5000/user/')
            .then(resp => {
                const cust = resp.data;
                this.setState({
                    userO: resp.data,
                    cust
                })
            });

        axios.get('http://localhost:5000/invoice/')
            .then(resp => {
                const cust = resp.data;
                this.setState({
                    billingO: resp.data,
                    cust
                })
            });
    }
    render() {
        return (
            <div className="container section">
                <table>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Room Number</th>
                            <th>Total Bill</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.userO.map((item) => {
                            return <tr>
                                <td >{item.username}</td>
                                <td>{item.room}</td>
                                <td>₹&nbsp;
                                    {this.state.billingO.map((item1) => {

                                        if (item._id == item1.userId) {
                                            return (item1.amount)

                                        }

                                    })}
                                </td>
                            </tr>;
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Invoice
