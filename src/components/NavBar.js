

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
                  
                <div className='row'>
                    <div className='col-lg-9 d-flex align-items-center'>
                        <a class="navbar-brand d-flex" href="#">
                            
                        <img style={{width:40, marginLeft:70, marginRight:15}}src={Logo} />
                        <p id="logo-name">MLGCL <br></br><span style={{fontSize:18}}>COVID-19 CONTACT TRACING SYSTEM</span></p>
                            
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{fontSize:"20px"}}>
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className='col-lg-3'>

                        <div className="collapse navbar-collapse" id="navbarNav" style={{position:"relative",left:"10px", width:"100%", float:"center"}}>

                            <ul class="navbar-nav font-family flex-end" style={{display:"block", position:"relative", left:"10px", top:"10px", width:"99%"}} >

                                {
                                localStorage.getItem('user-info') ?
                                <>
                                    <li class="nav-item" >
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Dashboard</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Profile</a>
                                    </li>

                                </>
                                :
                                <>
                                    <li class="nav-item" >
                                    <a class="nav-link" href="#">Login</a>
                                    </li>

                                    <li class="nav-item" >
                                    <a class="nav-link" href="#">Register</a>
                                    </li>
                                </>
                                }

                                {
                                    localStorage.getItem('user-info') ?    
                                        <Navbar>
                                                    
                                            <Nav>
                                                <NavDropdown title={user && user.firstname} className="btn btn-primary" style={{color:"white"}}>
                                                    <NavDropdown.Item className="dropdown-item"onClick={logOut}>Logout</NavDropdown.Item>

                                                    <NavDropdown.Item className="dropdown-item"onClick={profile}>Profile</NavDropdown.Item>
                                                </NavDropdown>       
                                            </Nav>
                                        </Navbar>
                                    :null  
                                }
                            </ul>
                        </div>
                                            
                    </div>
                </div>

                            
            </nav>

 
        </div>
    )
}

export default NavBar;