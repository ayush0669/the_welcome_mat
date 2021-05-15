import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Adminpanel from "./components/AdminComponents/Adminpanel";
import Adduser from "./components/AdminComponents/Adduser";
import Users from "./components/AdminComponents/Users";
import ChangeMenu from "./components/AdminComponents/ChangeMenu";
import Footer from "./components/Footer";
import Sidenav from "./components/AdminComponents/Sidenav";
import "./AdminApp.css";
import NavbarAdmin from "./components/AdminComponents/NavbarAdmin";
import M from "materialize-css";
import Login from "./components/Login";
import Invoice from "./components/AdminComponents/Invoice";


function AdminApp() {
  return (
    <Router>
      <div className="App">
        {/* <Addprice></Addprice> */}
        <header className="adminheader">
          <NavbarAdmin />
          <Sidenav/>
          
        </header>
        <main className="adminmain">
         <Switch>
          <Route exact path="/admin" component={Adminpanel} />
          <Route path="/admin/adduser" component={Adduser} />
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/menu" component={ChangeMenu}/>
          <Route path="/admin/invoice" component={Invoice}/>          
          <Route exact path="/" component={Login} />
        </Switch>
        </main>
        <footer className="adminfooter">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default AdminApp;
