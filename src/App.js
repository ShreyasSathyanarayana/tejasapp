import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Legal from "./components/Legal";
import Ourservice from "./components/Ourservice";
import Contactus from "./components/Contactus";
import "./App.css"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App(){
  return(
    <div>
      <Router>
        <div className="container-top">
          <p><i class="fa-regular fa-envelope"></i> tejasgowda088@gmail.com</p>
          <p><i class="fa-solid fa-phone"></i> 9606859359</p>
        </div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ourservices" element={<Ourservice/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        <Route path="/legal" element={<Legal/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App;