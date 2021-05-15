import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';


class Internet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            status: '',
            data: '',
            specific: '',
            isdownload: false,
            isupload: false,
            isfluctuate: false,
            isrange: false

        }
    }
    onChangeDownload = () => {
        this.setState(initialState => ({
            isdownload: !initialState.isdownload,
        }));
    }
    onChangeUpload = () => {
        this.setState(initialState => ({
            isupload: !initialState.isupload,
        }));
    }

    onChangeFluctuate = () => {
        this.setState(initialState => ({
            isfluctuate: !initialState.isfluctuate,
        }));
    }
    onChangeRange = () => {
        this.setState(initialState => ({
            isrange: !initialState.isrange,
        }));
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
        const internet = {
            userId: this.props.match.params.id,
            specific: this.state.specific,
            status: "Pending",
            data: this.state.data
            
        }
        axios.post('http://localhost:5000/internet/add', internet)
            .then(res => console.log(res.data));
        alert("Thank you. Your request is being processing." )
        console.log(internet);
        
        
        //alert(`${this.state.specific}` + "  Issues registered Successfully")
        alert("Your request is recieved. We will contact you shortly" )
        this.setState = {
            userId: '',
            status: '',
            data: '',
            specific: '',
            isdownload: false,
            isupload: false,
            isfluctuate: false,
            isrange: false

        }
    }
    render() {
        return (
            <div className="container section z-depth-5 blue-grey lighten-5" >
                <div className="row">
                    <div className="col s12 m10 l6 push-l3 push-m1">
                        <h3 className="center-align"> Internet Issues</h3>
                        <p className="center-align">Enter your issues here:</p>
                        <form onSubmit={this.submitHandler} >
                            <div class="valign-wrapper" class="card-panel">
                                <p>
                                    <label className="form-check-label">
                                        <input type="checkbox" checked={this.state.isdownload}
                                            onChange={this.onChangeDownload}
                                        />
                                        <span class="black-text"> Slow wifi 'Download Speed'.</span>
                                    </label>
                                </p>
                                <p>
                                    <label className="form-check-label">
                                        <input type="checkbox" checked={this.state.isupload}
                                            onChange={this.onChangeUpload}
                                        />
                                        <span class="black-text"> Slow wifi 'Upload Speed'.</span>
                                    </label>
                                </p>
                                <p>
                                    <label className="form-check-label">
                                        <input type="checkbox" checked={this.state.isfluctuate}
                                            onChange={this.onChangeFluctuate}
                                        />
                                        <span class="black-text"> Fluctuating network speed.</span>
                                    </label>
                                </p>
                                <p>
                                    <label className="form-check-label">
                                        <input type="checkbox" checked={this.state.isrange}
                                            onChange={this.onChangeRange}
                                        />
                                        <span class="black-text"> No wifi range at all.</span>
                                    </label>
                                </p>
                                <br></br>

                                <p><h6>Any specific Problem. [Optional]</h6></p>
                                <div className="row section">

                                    <div className="row">
                                        <div className="input-field col s12 section">
                                            <input id="specific" type="text" value={this.specific} name='specific' onChange={this.changeHandler} className="validate"></input>


                                            <label for="specific">Write your issue here</label>
                                        </div>
                                    </div>
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

export default Internet