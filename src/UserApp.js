import Home from './components/UserComponents/Home';
import Navbar from './components/UserComponents/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Food from './components/UserComponents/Food';
import SupportandMaintaince from './components/UserComponents/SupportAndMaintaince';
import Laundary from './components/UserComponents/Laundary';
import Internet from './components/UserComponents/Internet';
import Housekeeping from './components/UserComponents/Housekeeping';
import About from './components/UserComponents/About';
import OrderHistory from './components/UserComponents/OrderHistory';
import Profile from './components/UserComponents/Profile';
import Login from './components/Login';


function UserApp(props) {
  // const id = props.history.location.state.id;
  return (
    <Router>
      <div className="App">
      
      <header className="App-header">
          <Navbar userId={props.history.location.state.id}/>
        </header>
        
        <Switch>    
          <Route exact path="/user/:id" component={Home} />
          <Route path="/user/:id/food" component={Food} />
          <Route path="/user/:id/internet" component={Internet} />
          <Route path="/user/:id/housekeeping" component={Housekeeping} />
          <Route path="/user/:id/laundary" component={Laundary} />
          <Route path="/user/:id/support" component={SupportandMaintaince} />
          <Route path="/user/:id/About" component={About}/>
          <Route path="/user/:id/Order" component={OrderHistory}/>
          <Route path="/user/:id/Profile" component={Profile}/>
          <Route exact path="/" component={Login} />
        </Switch>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
    
  );
}

export default UserApp;
