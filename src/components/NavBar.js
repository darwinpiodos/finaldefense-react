

import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import{Link, useHistory} from 'react-router-dom';
import '../App.css';
import '../styles/navbar.css';

import Logo from "../images/mlg-logo.png";
function NavBar(){



    

    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();

    function logOut()
    {
        localStorage.clear();
        history.push('/')
    }

    function profile()
    {
      
        history.push('/profile')


    }

    return(
        <div id="navbar" className=" container-fluid d-flex align-items-center">
            

            <nav class="navbar navbar-expand-lg navbar-light p-4" style={{display:"table", width:"100%"}}>
                <div class="container-fluid p-0">

                    

                    <img style={{width:40, marginLeft:70, marginRight:15}}src={Logo} />

                    <a class="navbar-brand" href="#">
                        
                     
                        <p id="logo-name">MLGCL <br></br><span style={{fontSize:18}}>COVID-19 CONTACT TRACING SYSTEM</span></p>
                        
                    </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{fontSize:"20px"}}>
                        <span class="navbar-toggler-icon"></span>
                        </button>

                    <div className="collapse navbar-collapse" id="navbarNav" style={{position:"relative",left:"10px", width:"100%", float:"right"}}>



                        <ul class="navbar-nav" style={{position:"relative", left:"30px", top:"10px"}} >
                            <li class="nav-item" >
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Profile</a>
                            </li>

                            <li class="nav-item" >
                            <a class="nav-link" href="#">Login</a>
                            </li>

                            <li class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>









           
        </div>
    )
}

export default NavBar;