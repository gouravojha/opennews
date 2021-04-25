import './App.css';
import Header from "./myComp/Header";
import { Switch, Route, Redirect,NavLink } from "react-router-dom";
import Summery from './page/Summery';
import Home from './page/Home';

function App() {
  return (
    <>
      <Header /><br /><br /><br />
      <div className="container" style={{backgroundColor:"whitesmoke"}}>
        <div className="row">
          <h1 style={{ textAlign: "center", marginTop: "30%" }}>Welcome to OpenNews</h1>
          <p style={{ textAlign: "center", marginTop: "5%" }}>Get unbiased, ad-free and smooth news reading experience with us</p>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <NavLink to="/home"><button className="btn btn-primary" style={{ marginTop: "5%", marginLeft: "32%" }}>Explore Now</button></NavLink>
          </div>
          <div className="col-md-4"></div>
        </div><br/><br/><br/><br/><br/>
      </div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/service' component={Summery} />
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App;
