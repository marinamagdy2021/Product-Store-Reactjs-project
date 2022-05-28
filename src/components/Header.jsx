import { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Day3/Routes/Login";

 
class Header extends Component {
  

   RemSession=()=>{
      sessionStorage.removeItem('Name');
      sessionStorage.removeItem('pass');
      this.props.LoginRef();
  };

  render(){

    return(
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to={"/home"} className="navbar-brand"> Marina Care </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active">List </Link>
        </li>
        <li className="nav-item">
          <Link to={"/Add"} className="nav-link">Add </Link>
        </li>
       
      
      </ul>

      <ul  className="navbar-nav me-auto  mb-lg-0">
      <li className="nav-item">
          <Link to={"/"} className="nav-link" onClick={()=> this.RemSession()}>Logout </Link>
        </li>
      </ul>
    </div>
  </div>
        </nav>
          )
  }

}

export default Header;