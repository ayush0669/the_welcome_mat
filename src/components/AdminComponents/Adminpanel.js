import React, { Component } from 'react'
import axios from 'axios';
import M from 'materialize-css';
const h2 = {
    backgroundColor:"green",
}

const h3 = {
    backgroundColor:"red",
}


class Adminpanel extends Component {

    intervalID;

    state = {
        data: [],
    }
    constructor(props) {
        super(props)

        this.state = {
            foodOrders: [],
            price: [],
            s:0,
            y:0,
            laundryOrders: [],
            houseKeepingOrders: [],
            supportOrders: [],
            internetOrders: [],
            userO:[],
            //countc: 0,
            custcnt: 0,

            countpr1: 0,
            countcr1: 0,

            countpr2: 0,
            countcr2: 0,

            countpr3: 0,
            countcr3: 0,

            countpr4: 0,
            countcr4: 0,

            countpr5: 0,
            countcr5: 0,

            countrev: 0,

            reci: 0,

            laundarySlot: null,

        }

    }
    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});

        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});

        var elems1 = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems1, {});

        this.getData();
        this.intervalID = setInterval(this.getData.bind(this), 1000);
        // axios.get('./menu.json')
        //     .then(resp => {
        //         this.setState({
        //             menus: resp.data
        //         })
        //     })


        // axios.get('http://localhost:5000/laundary/')
        //     .then(resp => {
        //         this.setState({
        //             laundryOrders: resp.data
        //         })
        //     });

        // axios.get('http://localhost:5000/housekeeping/')
        //     .then(resp => {
        //         this.setState({
        //             houseKeepingOrders: resp.data
        //         })
        //     });

        // axios.get('http://localhost:5000/support/')
        //     .then(resp => {
        //         this.setState({
        //             supportOrders: resp.data
        //         })
        //     });

        // axios.get('http://localhost:5000/internet/')

        //     .then(resp => {
        //         this.setState({
        //             internetOrders: resp.data
        //         })
        //     });
       
        

    }

    getData = () => {
        // do something to fetch data from a remote API.
        axios.get('http://localhost:5000/laundary/')
            .then(resp => {
                //const cust = resp.data;
                const countc = resp.data.length;
                const cust = resp.data;
                const compreq = cust.filter(resp => resp.status === 'Completed');
                const countcr4 = compreq.length;
                const compreq1 = cust.filter(resp => resp.status === 'Pending');
                const countpr4 = compreq1.length;

                this.setState({
                    laundryOrders: resp.data,
                    cust,
                    compreq,
                    countcr4,
                    compreq1,
                    countpr4

                })
            });

        axios.get('http://localhost:5000/housekeeping/')
            .then(resp => {
                const cust = resp.data;
                const compreq = cust.filter(resp => resp.status === 'Completed');
                const countcr1 = compreq.length;
                const compreq1 = cust.filter(resp => resp.status === 'Pending');
                const countpr1 = compreq1.length;
                ///const reci=countcr3+countpr3;
                this.setState({
                    houseKeepingOrders: resp.data,
                    cust,
                    compreq,
                    countcr1,
                    compreq1,
                    countpr1
                })
            });

            axios.get('http://localhost:5000/foodorder/')
            .then(resp => {
                const cust = resp.data;
                const compreq = cust.filter(resp => resp.status === 'Completed');
                const countcr5 = compreq.length;
                const compreq1 = cust.filter(resp => resp.status === 'Pending');
                const countpr5 = compreq1.length;
               // const recf=countcr5+countpr5;
                this.setState({
                    foodOrders: resp.data,
                    cust,
                    compreq,
                    countcr5,
                    compreq1,
                    countpr5
                })
            });

        axios.get('http://localhost:5000/support/')
            .then(resp => {
                const cust = resp.data;
                const compreq = cust.filter(resp => resp.status === 'Completed');
                const countcr2 = compreq.length;
                const compreq1 = cust.filter(resp => resp.status === 'Pending');
                const countpr2 = compreq1.length;
               // const recs=countcr2+countpr2;
                this.setState({
                    supportOrders: resp.data,
                    cust,
                    compreq,
                    countcr2,
                    compreq1,
                    countpr2
                })
            });

        axios.get('http://localhost:5000/internet/')
            .then(resp => {
                const cust = resp.data;
                const compreq = cust.filter(resp => resp.status === 'Completed');
                const countcr3 = compreq.length;
                const compreq1 = cust.filter(resp => resp.status === 'Pending');
                const countpr3 = compreq1.length;
                const reci=countcr3+countpr3;
                this.setState({
                    internetOrders: resp.data,
                    cust,
                    compreq,
                    countcr3,
                    compreq1,
                    countpr3
                })
            });

        axios.get('http://localhost:5000/user/')
            .then(resp => {
                const cust = resp.data;
                //const compreq = cust.filter(resp => resp.status === 'Recieved');
                //const countcr3 = compreq.length;
                const custcnt = cust.length;
                //const countpr3 = compreq1.length;
                this.setState({
                    userO:resp.data,
                    cust,
                    custcnt

                })
            });
            axios.get('http://localhost:5000/invoice/')
            .then(resp => {
                this.state.s=0;
                this.setState({
                    price: resp.data
                    
                })
                {this.state.price.map((pr) =>
                    // <h2>{pr.price}{pr.id}</h2>
                     //  this.count = this.count + pr.price
                     {
                         (this.state.s)=Number(this.state.s)+Number(pr.amount)}
                     
                     
                     )}
                console.log(this.state.price[0]);
                console.log(this.state.s)
                this.state.y=this.state.s
    
            })
           
            //const reci=this.state.countcr1+this.state.countcr2+this.state.countcr3+this.state.countcr4+this.state.countcr5+this.state.countpr1+this.state.countpr2+this.state.countpr3+this.state.countpr4+this.state.countpr5;

    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillUnmount() {
        // clearTimeout(this.intervalID);
        clearInterval(this.intervalID);
    }

    updatecomplaintFood(id) {
        axios.post('http://localhost:5000/foodorder/update/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          foodOrders: this.state.foodOrders
        })
      }

    updatecomplaintInternet(id) {
        axios.post('http://localhost:5000/internet/update/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          internetOrders: this.state.internetOrders
        })
      }

      updatecomplaintLaundary(id) {
        axios.post('http://localhost:5000/laundary/update/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          laundaryOrders: this.state.laundaryOrders
        })
      }

      updatecomplaintSupport(id) {
        axios.post('http://localhost:5000/support/update/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          supportOrders: this.state.supportOrders
        })
      }

      updatecomplaintHousekeeping(id) {
        axios.post('http://localhost:5000/housekeeping/update/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          houseKeepingOrders: this.state.houseKeepingOrders
        })
      }
    




    render() {
        return (

            <div className="section" >



                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider" tabindex="-1"></li>
                    <li><a href="#!">three</a></li>
                    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                </ul>
                <div className="row">
                    <div className="col s12 m4 l4">
                        <div className="card light-blue">
                            <div className="card-content white-text">
                                <b>
                                <span className="card-title">Total Customers</span>
                                <p>Customers served till date:</p>
                                <p style={{fontSize:30}} className="text-bold">{this.state.custcnt}</p>
                                </b>
                                <br></br>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card green darken-1">
                            <div className="card-content white-text">
                                <b>
                                <span className="card-title">Requests</span></b>
                                <p>
                                    <ul>
                                        <b>
                                        <li>Completed requests:&nbsp;&nbsp;&nbsp;{this.state.countcr1 + this.state.countcr2 + this.state.countcr3 + this.state.countcr4+ this.state.countcr5}</li>
                                        <li>Pending requests:&nbsp;&nbsp;&nbsp;{this.state.countpr1 + this.state.countpr2 + this.state.countpr3 + this.state.countpr4+this.state.countpr5}</li>
                                        <li>Received requests till now:&nbsp;&nbsp;&nbsp;{this.state.countcr1 + this.state.countcr2 + this.state.countcr3 + this.state.countcr4+ this.state.countcr5+this.state.countpr1 + this.state.countpr2 + this.state.countpr3 + this.state.countpr4+this.state.countpr5}</li>
                                        </b>
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="col s12 m4 l4">
                        <div className="card  pink accent-2">
                            <div className="card-content white-text">
                                <b>
                                <span className="card-title">Revenue</span>
                                <p>Total Revenue earned :</p> <p style={{fontSize:30}}>Rs  {this.state.y}</p>
                                <br></br>
                                </b>
                            </div>

                        </div>
                    </div>


                </div>
                <div class="card">
                    <div class="card-content">
                        <p><h4 style={{ fontFamily: "Lobster" }}><u>Live Stats</u></h4></p>
                    </div>
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
                                    <tr className="white">
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Order Name</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {this.state.foodOrders.map((item) => {
                                        return <tr>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.username)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.room)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td >{item.food_name}</td>
                                            <td>1</td>
                                            <td>{item.food_price}</td>
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
                                            
                                            <td>
                                            <button className="waves-effect waves-light btn" onClick={() => { this.updatecomplaintFood(item._id) }} style={item.status=="Completed" ? h2 : h3}>{item.status}</button>
                                            </td>
                                            {/* <td>{item.time}</td> */}

                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                            
                        </div>
                        <div id="laundary">
                        
                            <table>
                                <thead>
                                    <tr className="white">
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Quantity</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.laundryOrders.map((item) => {
                                        return <tr>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.username)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.room)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td >{item.laundaryTask[0]},{item.laundaryTask[1]},{item.laundaryTask[2]}</td>
                                            <td>{item.laundaryclothCount}</td>
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
                                            <td>
                                            <button className="waves-effect waves-light btn" onClick={() => { this.updatecomplaintLaundary(item._id) }} style={item.status=="Completed" ? h2 : h3}>{item.status}</button>
                                            </td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                           
                        </div>
                        <div id="housekeep">
                        
                            <table>
                                <thead>
                                    <tr className="white">
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.houseKeepingOrders.map((item) => {
                                        return <tr>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.username)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.room)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
                                            <td>
                                            <button className="waves-effect waves-light btn" onClick={() => { this.updatecomplaintHousekeeping(item._id) }} style={item.status=="Completed" ? h2 : h3}>{item.status}</button>
                                            </td>
                                            {/* <td>{item.time}</td> */}

                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                           
                        </div>
                        <div id="support">
                       
                            <table>
                                <thead>
                                    <tr className="white">
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.supportOrders.map((item) => {
                                        return <tr>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.username)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.room)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
                                            <td><button className="waves-effect waves-light btn" onClick={() => { this.updatecomplaintSupport(item._id) }} style={item.status=="Completed" ? h2 : h3}>{item.status}</button></td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                            
                        </div>
                        <div id="internet">
                        
                            <table>
                                <thead>
                                    <tr className="white">
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.internetOrders.map((item) => {
                                        return <tr>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.username)

                                               }
                                            
                                                
                                                 })}
                                            </td>
                                            <td>
                                            {this.state.userO.map((item1) => {
                                               if(item.userId==item1._id){
                                                   return(item1.room)

                                               }
                                            
                                                
                                                 })}    
                                            </td>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
                                            <td><button className="waves-effect waves-light btn" onClick={() => { this.updatecomplaintInternet(item._id) }} style={item.status=="Completed" ? h2 : h3}>{item.status}</button>
                                                </td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                           
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default Adminpanel
