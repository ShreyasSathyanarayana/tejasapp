import "../components/css/Navbar.css"
import logo from "../components/ManTeclogo.jpeg"

import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg  navbar-container">
        <div className="container-fluid">
        
        <img src={logo} className="company-logo " alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/ourservices"><a className="nav-link" href="#">Our Services</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/legal"><a className="nav-link" href="#">Legal</a></Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus"><a className="nav-link " aria-disabled="true">Contact Us</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;