import React, { Component } from 'react'
import axios from 'axios';
import M, { Timepicker } from 'materialize-css';

class OrderHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foodOrders: [],
            laundryOrders: [],
            houseKeepingOrders: [],
            supportOrders: [],
            internetOrders: [],
            total:0
        }
    }
    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        
        axios.get('http://localhost:5000/invoice/'+this.props.match.params.id)
            .then(resp => {
                //console.log(resp);
                // ab upr ki state me jo orders hai 
                // usme apan json wala data daalre
                this.setState({
                    total: resp.data[0].amount
                })
                console.log(this.state.total)
            });

        axios.get('http://localhost:5000/foodorder/'+this.props.match.params.id)
            .then(resp => {
                //console.log(resp);
                // ab upr ki state me jo orders hai 
                // usme apan json wala data daalre
                this.setState({
                    foodOrders: resp.data
                })
            });

        axios.get('http://localhost:5000/laundary/'+this.props.match.params.id)
            .then(resp => {
                this.setState({
                    laundryOrders: resp.data
                })
            });

        axios.get('http://localhost:5000/housekeeping/'+this.props.match.params.id)
            .then(resp => {
                this.setState({
                    houseKeepingOrders: resp.data
                })
            });

        axios.get('http://localhost:5000/support/'+this.props.match.params.id)
            .then(resp => {
                this.setState({
                    supportOrders: resp.data
                })
            });

        axios.get('http://localhost:5000/internet/'+this.props.match.params.id)
            .then(resp => {
                this.setState({
                    internetOrders: resp.data
                })
            });



    }
    render(i) {
        return (
            <div className="section container">

                <div class="card center-align " >

                    <div class="card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a href="#food">Food</a></li>
                            <li class="tab"><a href="#laundary">Laundary</a></li>
                            <li class="tab"><a href="#housekeep">Housekeeping</a></li>
                            <li class="tab"><a href="#support">Support And Maintaince</a></li>
                            <li class="tab"><a href="#internet">Internet</a></li>
                        </ul>
                    </div>
                    <div class="card-content grey lighten-4">
                        <div id="food">
                            <table>
                                <thead>
                                    <tr>

                                        <th>Order Name</th>
                                        <th>Type</th>
                                        <th>Price</th>
                                        
                                        <th>Time</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.foodOrders.map((item) => {
                                        return <tr>
                                            <td className="center">{item.food_name}</td>

                                            <td>{item.food_type}</td>
                                            <td>{item.food_price}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                        </tr>;
                                    })}
                                </tbody>
                            </table>
                        </div>



                        <div id="laundary">
                            <table>
                                <thead>
                                    <tr>

                                        <th class="col s3">Task</th>   {/* laundaryTask */}
                                        <th>Quantity</th> {/* laundaryclothCount */}
                                        <th>Time</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.laundryOrders.map((item) => {
                                        return <tr>
                                            <td >{item.laundaryTask[0]},{item.laundaryTask[1]},{item.laundaryTask[2]}</td>
                                            <td>{item.laundaryclothCount}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            
                                        </tr>;
                                    })}
                                </tbody>
                            </table>
                            
                        </div>


                        <div id="housekeep">
                            <table>
                                <thead>
                                    <tr>

                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.houseKeepingOrders.map((item) => {
                                        return <tr>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            {/* <td>{item.time}</td> */}

                                        </tr>;
                                    })}
                                </tbody>
                            </table>

                        </div>


                        <div id="support">
                            <table>
                                <thead>
                                    <tr>

                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.supportOrders.map((item) => {
                                        return <tr>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}
                                </tbody>
                            </table>

                        </div>


                        <div id="internet">
                            <table>
                                <thead>
                                    <tr>

                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.internetOrders.map((item) => {
                                        return <tr>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}
                                </tbody>
                            </table>

                        </div>



                    </div>
                    <div class="card-content ">
                        <p>Total={this.state.total}/-</p>
                    </div>
                </div>

            </div>


            // <div>
            //     <div className="  container section z-depth-5 blue-grey lighten-4  " >
            //         <h2 className="center-align ">Your Order History</h2>
            //         <table className="highlight">
            //             <thead>
            //                 <tr>
            //                     <th>Order Number</th>
            //                     <th>Category</th>
            //                     <th>Item Name</th>
            //                     <th>Item Price</th>
            //                     <th>Quantity</th>
            //                     <th>Total</th>
            //                     <th>Time</th>
            //                 </tr>
            //             </thead>
            //             <tbody>
            //                 {this.state.orders.map((item) => {
            //                     return <tr>
            //                         <td className="center">{item.orderno}</td>
            //                         <td>{item.category}</td>
            //                         <td>{item.itemname}</td>
            //                         <td>{item.itemprice}</td>
            //                         <td>{item.quantity}</td>
            //                         <td>{item.total}</td>
            //                         <td>{item.time}</td>
            //                     </tr>;
            //                 })}
            //             </tbody>
            //         </table>
            //         <h3 className="right-align">Total= 220/-</h3>
            //     </div >
            // </div >
        )
    }
}

export default OrderHistory
