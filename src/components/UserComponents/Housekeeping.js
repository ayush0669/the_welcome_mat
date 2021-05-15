import React, { Component } from 'react'
import M from "materialize-css";
import axios from 'axios';


class Housekeeping extends Component {
  constructor(props) {
    super(props)
    //this.multipleChoiceChangeHandler = this.multipleChoiceChangeHandler.bind(this);
    this.state = {
      userId: null,
      //housekeepingTask: [ ],
      text: "",
      status: "",
      Sweepmop: false,
      bed: false,
      linenchange: false,
      toiletaries: false,
      other: false,
      garbage: false,
      cleaningtoilet: false,
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

  onChangeSweepmop = () => {
    this.setState(initialState => ({
      Sweepmop: !initialState.Sweepmop,
    }));
  }

  onChangebed = () => {
    this.setState(initialState => ({
      bed: !initialState.bed,
    }));
  }

  onChangelinenchange = () => {
    this.setState(initialState => ({
      linenchange: !initialState.linenchange,
    }));
  }

  onChangetoiletaries = () => {
    this.setState(initialState => ({
      toiletaries: !initialState.toiletaries,
    }));
  }

  onChangeother = () => {
    this.setState(initialState => ({
      other: !initialState.other,
    }));
  }

  onChangegarbage = () => {
    this.setState(initialState => ({
      garbage: !initialState.garbage,
    }));
  }

  onChangecleaningtoilet = () => {
    this.setState(initialState => ({
      cleaningtoilet: !initialState.cleaningtoilet,
    }));
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
    //console.log(this.state.data);
    

    const HouseKeeping = {
      userId: this.props.match.params.id,
      data: this.state.data,
      text: this.state.text,
      status: "Pending"

    }
    alert("Thank you. The attendee will be at your door in some time." )

    
    axios.post('http://localhost:5000/housekeeping/add', HouseKeeping)
      .then(res => console.log(res.data));
      console.log(HouseKeeping);
      //alert(`${this.state.text}`)
    this.setState({
      userId:null,
      text: '',
      status: '',
      data: '',
      Sweepmop: false,
      bed: false,
      linenchange: false,
      toiletaries: false,
      other: false,
      garbage: false,
      cleaningtoilet: false
    })
  }
  render() {
    return (
      <div className="container section z-depth-5 blue-grey lighten-5" >
        <div class="container" >
          <h3 className="center-align"> Housekeeping </h3>
          <p className="center-align">Choose the service(s) you need:</p>
          <form onSubmit={this.submitHandler} action="#">
            <div class="valign-wrapper" class="card-panel " >
              <p>
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.Sweepmop}
                    onChange={this.onChangeSweepmop} />
                  <span class="black-text">Sweeping and Mopping the floor</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"
                    checked={this.state.bed}
                    onChange={this.onChangebed} />
                  <span class="black-text">Making the bed</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"
                    checked={this.state.linenchange}
                    onChange={this.onChangelinenchange} />
                  <span class="black-text">Changing the dirty Linen and Towels</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"
                    checked={this.state.toiletaries}
                    onChange={this.onChangetoiletaries} />
                  <span class="black-text">Restocking toiletries</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"
                    checked={this.state.other}
                    onChange={this.onChangeother} />
                  <span class="black-text">Restocking other room amenities</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"
                    checked={this.state.garbage}
                    onChange={this.onChangegarbage} />
                  <span class="black-text">Collecting Garbage</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"
                    checked={this.state.cleaningtoilet}
                    onChange={this.onChangecleaningtoilet} />
                  <span class="black-text">Cleaning Toilet </span>
                </label>
              </p>
              <br></br>
              <p><h6>Any specific details which you want to highlight. [Optional]</h6></p>
              <div className="input-field section">
                <input id="text" type="text" value={this.text} name='text' onChange={this.changeHandler} className="validate"></input>
                <label for="text">Write your issue here</label>
              </div>
              <div className="center">
                <button className="btn-small">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default Housekeeping
