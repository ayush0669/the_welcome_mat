import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';


class ChangeMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu_name: null,
            menu_type: null,
            menu_price: 0,
            menu_imglink: null,
            breakfast: [],
            dinner: [],
            lunch: [],
            menu: []
        }
    }

    submitHandler = e => {
        const varMenu = {
            menu_name: this.state.menu_name,
            menu_type: this.state.menu_type,
            menu_price: this.state.menu_price,
            menu_imglink: this.state.menu_imglink
        }


        // alert(`${this.state.menu_name}` +""+ `${this.state.menu_price}` + `${this.state.menu_imglink}` + `${this.state.menu_type}` + "  Added New Item")
        alert("Added New Item")

        axios.post('http://localhost:5000/menu/add', varMenu)
            .then(res => console.log(res.data));
        console.log(varMenu);
        this.setState = {
            menu_name: null,
            menu_type: null,
            menu_price: 0,
            menu_imglink: null

        }
    }

    deleteMenuItem = id => {
        axios.delete('http://localhost:5000/menu/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            breakfast: this.state.breakfast.filter(i => i._id !== id)
        })
        this.setState({
            lunch: this.state.lunch.filter(i => i._id !== id)
        })
        this.setState({
            dinner: this.state.dinner.filter(i => i._id !== id)
        })

     }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
        axios.get('http://localhost:5000/menu/breakfast')
            .then(resp => {
                this.setState({
                    breakfast: resp.data
                })
            })
        axios.get('http://localhost:5000/menu/lunch')
            .then(resp => {
                this.setState({
                    lunch: resp.data
                })
            })
        axios.get('http://localhost:5000/menu/dinner')
            .then(resp => {
                this.setState({
                    dinner: resp.data
                })
            })
 
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});



    }

    render() {
        return (
            <div >

                <div className="col s12 m10 l6 push-l3 push-m1 container section z-depth-5 blue-grey lighten-5">
                    <h3 className="center-align"> Change Menu </h3>
                    <form className="container section  blue-grey lighten-5" onSubmit={this.submitHandler} action="#" >
                        <div className="row section ">


                            <div className="input-field col s12 section">

                                <input id="itemname" type="text" value={this.menu_name} name='menu_name' onChange={this.changeHandler} className="validate"></input>
                                <label for="itemname">Item Name</label>
                            </div>

                            <div className="input-field col s12 section">

                                <input id="price" type="text" value={this.menu_price} name='menu_price' onChange={this.changeHandler} className="validate"></input>
                                <label for="price">Price of Item</label>
                            </div>

                            <div className="input-field col s12 section">

                                <input id="img" type="text" value={this.menu_imglink} name='menu_imglink' onChange={this.changeHandler} className="validate"></input>
                                <label for="img">Image Link:</label>
                            </div>

                            <div className="input-field col s12 section">
                                <h6>Type of food :</h6>

                                <select value={this.menu_type} name='menu_type' onChange={this.changeHandler} className="validate">
                                    <option value="" disabled selected >Choose your option</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>
                            </div>


                            <div className="center">
                                <button className="btn-small">Add</button>
                            </div>
                        </div>
                    </form>
                </div>



                <div className="card" style={{ marginBottom: "0px" }}>

                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab"><a className="active" href="#test1">Breakfast</a></li>
                            <li className="tab"><a href="#test2">Lunch</a></li>
                            <li className="tab"><a href="#test3">Dinner</a></li>
                        </ul>
                    </div>
                    <div className="card-content grey lighten-4">

                        <div id="test1">
                            <div className="row">
                                {this.state.breakfast.map((item) =>
                                    <div className="col s12 m4">
                                        <div className="card small ">

                                            <div className="card-image">
                                                 <img src={item.menu_imglink}/>  {/*../images/food.jpg */}
                                            </div>
                                            <div className="card-content">
                                                <span>{item.menu_name}
                                                    <button className="btn-floating waves-effect waves-light right " onClick={() => { this.deleteMenuItem(item._id) }} ><i className="material-icons black right " >delete</i></button>
                                                </span>
                                                <p>{item.menu_price}</p>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div id="test2">
                            <div className="row">
                                {this.state.lunch.map((item) =>
                                    <div className="col s12 m4">
                                        <div className="card small ">
                                            <div className="card-image">
                                            <img src={item.menu_imglink}/>
                                            </div>
                                            <div className="card-content">
                                                <span>{item.menu_name}
                                                    <button className="btn-floating waves-effect waves-light right " onClick={() => { this.deleteMenuItem(item._id) }}><i className="material-icons black right " >delete</i></button>
                                                </span>
                                                <p>{item.menu_price}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div id="test3">
                            <div className="row">
                                {this.state.dinner.map((item) =>
                                    <div className="col s12 m4">
                                        <div className="card small ">
                                            <div className="card-image">
                                            <img src={item.menu_imglink}/>
                                            </div>
                                            <div className="card-content">
                                                <span>{item.menu_name}
                                                    <button className="btn-floating waves-effect waves-light right " onClick={() => { this.deleteMenuItem(item._id) }}><i className="material-icons black right ">delete</i></button>
                                                </span>
                                                <p>{item.menu_price}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangeMenu

