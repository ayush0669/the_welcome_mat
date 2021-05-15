import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './components/Login';
import UserApp from './UserApp';
import AdminApp from './AdminApp';
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/user" component={UserApp} />
          {/* <Route path="/user/" render={(props)=>(<UserApp {...props} id={props.history.location.state.id}/>)} /> */}
          <Route path="/admin" component={AdminApp} />
        </Switch>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
