import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';

class Laundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            laundaryclothCount: 0,
            laundarySlot: null,
            laundaryTask: [],
            status: null,
            amount:0,
        }
    }




    componentDidMount() {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    multipleChoiceChangeHandler = e => {
        this.setState({
            laundaryTask: Array.from(e.target.selectedOptions, (item) => item.value)
        })
    }


    submitHandler = e => {
        e.preventDefault();
        const varLaundary = {
            userId: this.props.match.params.id,
            laundaryclothCount: this.state.laundaryclothCount,
            laundarySlot: this.state.laundarySlot,
            laundaryTask: this.state.laundaryTask,
            status: "Pending"
        }
        this.setState = {
            userId: '',
            status: '',
            laundaryclothCount: 0,
            laundarySlot: '',
            laundaryTask: []
        }
        //alert("Yay!! Slot booked for " + `${this.state.laundaryclothCount}` + " clothes for time " + `${this.state.laundarySlot}` + " for " + `${this.state.laundaryTask}`)
        alert("Thank you. The attendee will be at your door on time." )


        axios.post('http://localhost:5000/laundary/add', varLaundary)
            .then(res => console.log(res.data));
        console.log(varLaundary);


         
axios.get('http://localhost:5000/invoice/'+this.props.match.params.id)
            .then(resp => {
                
                    this.state.amount=resp.data[0].amount;
                
                console.log(this.state.amount);

                const invo = {
                    userId: this.props.match.params.id,
                    
                    amount: this.state.amount+(this.state.laundaryclothCount*10)
                }
                axios.put('http://localhost:5000/invoice/update/'+this.props.match.params.id, invo)
                .then(res => console.log(res.data));
                    console.log(invo);
            });
             
       // e.target.reset();
    }

    render() {

        return (
            <div className="container section z-depth-5 blue-grey lighten-5" >
                <div class="row" >
                    <h3 className="center-align"> Laundry </h3>
                    <div className="col s12 m10 l6 push-l3 push-m1">
                        <form onSubmit={this.submitHandler} action="#" >
                            {/* no. of cloths */}
                            <div class="valign-wrapper" class="card-panel">
                                <div className="input-field section">
                                    <input id="clothCount" type="number" min="0" value={this.laundaryclothCount} name='laundaryclothCount' onChange={this.changeHandler} className="validate"></input>
                                    <label for="clothCount">Number of cloths</label>
                                </div>

                                {/* choose  */}
                                <div className="input-field section">
                                    <select value={this.laundarySlot} name='laundarySlot' onChange={this.changeHandler} className="validate">
                                        <option value="" disabled selected >Choose your option</option>
                                        <option value="08AM to 09AM">08AM to 09AM</option>
                                        <option value="09AM to 10AM">09AM to 10AM</option>
                                        <option value="10AM to 11AM">10AM to 11AM</option>
                                        <option value="11AM to 12PM">11AM to 12PM</option>
                                        <option value="12PM to 1PM">12PM to 1PM</option>
                                        <option value="2PM to 3PM">2PM to 3PM</option>
                                        <option value="5PM to 6PM">5PM to 6PM</option>
                                    </select>
                                    <label for="Pickuptime" >Choose Laundary Pickup time:</label>
                                </div>

                                {/* what to do */}
                                <div className="input-field section">
                                    <select multiple value={this.laundaryTask} name='laundaryTask' onChange={this.multipleChoiceChangeHandler} className="validate">
                                        <option value="" disabled>Choose your options</option>
                                        <option value="Wash">Wash</option>
                                        <option value="Iron">Iron</option>
                                        <option value="DryClean">Dry Clean</option>
                                    </select>
                                    <label>What do we do with your Stuff:</label>
                                </div>

                                {/* submit */}
                                <div className="center">
                                    <button className="btn-small">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Laundary