import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';


class SupportandMaintaince extends Component {
    constructor(props) {
        super(props);
        //this.multipleChoiceChangeHandler = this.multipleChoiceChangeHandler.bind(this);
        this.state = {
            furtherdetails: '',
            userId: '',
            //suportTask: [ ]
            isswitch: false,
            isfan: false,
            islight: false,
            isheat: false,
            iskey: false,
            data: ''

        }
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
        var elems2 = document.querySelectorAll('.modal');
        M.Modal.init(elems2, {});
    }

    onChangeSwitch = () => {
        this.setState(initialState => ({
            isswitch: !initialState.isswitch,
        }));
    }

    onChangeFan = () => {
        this.setState(initialState => ({
            isfan: !initialState.isfan,
        }));
    }

    onChangeLight = () => {
        this.setState(initialState => ({
            islight: !initialState.islight,
        }));
    }

    onChangeHeat = () => {
        this.setState(initialState => ({
            isheat: !initialState.isheat,
        }));
    }

    onChangeKey = () => {
        this.setState(initialState => ({
            iskey: !initialState.iskey,
        }));
    }

    //   onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    //   }



    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // multipleChoiceChangeHandler = e => {
    //     this.setState({
    //         supportTask: Array.from(e.target.selectedOptions, (item) => item.value)
    //     })
    // }

    submitHandler = e => {
        let arr = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                arr.push(key);
            }
        }
        e.preventDefault();
        e.target.reset();
        this.state.data = arr.toString();
        // this.state.data = {
        //     check: arr.toString()
        // };

        const Support ={
            userId: this.props.match.params.id,
            status: "Pending",
            data: this.state.data,
            furtherdetails: this.state.furtherdetails,
            }

            

        axios.post('http://localhost:5000/support/add', Support)
            .then(res => {console.log(res.data)
                
            });

        console.log(Support);
        alert("Thank you for your patience. The sevice incharge will be at your doorstep in some time." )
        this.setState = {
            furtherdetails: '',
            userId: '',
            //suportTask: [ ]
            isswitch: false,
            isfan: false,
            islight: false,
            isheat: false,
            iskey: false,
            data: ''

        }
    }

    render() {
        return (
            <div className="container section z-depth-5 blue-grey lighten-5" >
                <div className="row">
                    <h3 className="center-align">Electrical Maintenance</h3>
                    <p className="center-align">Enter the type of Electrical maintenance you need:</p>
                    <div className="col s12 m10 l6 push-l3 push-m1">
                        <form onSubmit={this.submitHandler} >
                            <div className="valign-wrapper" className="card-panel" >
                                <p>
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                            checked={this.state.isswitch}
                                            onChange={this.onChangeSwitch} />
                                        <span className="black-text">Switch Board issues</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox"
                                            checked={this.state.isfan}
                                            onChange={this.onChangeFan} />
                                        <span className="black-text">Ceiling Fans</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox"
                                            checked={this.state.islight}
                                            onChange={this.onChangeLight} />
                                        <span className="black-text">Lights</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox"
                                            checked={this.state.isheat}
                                            onChange={this.onChangeHeat} />
                                        <span className="black-text">Geysers and Room Heaters</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox"
                                            checked={this.state.iskey}
                                            onChange={this.onChangeKey} />
                                        <span className="black-text">Issues with the Entry Key</span>
                                    </label>
                                </p>
                                <br></br>

                                <p><h6>Any specific details which you want to highlight. [Optional]</h6></p>



                                <div className="input-field section">
                                    <input id="furtherdetails" type="text" value={this.furtherdetails} name='furtherdetails' onChange={this.changeHandler} className="validate"></input>


                                    <label for="furtherdetails">Write your issue here</label>
                                </div>



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

export default SupportandMaintaince