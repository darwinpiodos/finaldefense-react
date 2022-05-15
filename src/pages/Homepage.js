import React from "react";

import NavBar from '../components/NavBar';
// import React from 'react';
import '../styles/homepage.css';
import '../styles/button.scss';
import Contact from "../images/contact-tracing.gif";

import{Link} from 'react-router-dom';


// import Footer from './Footer';


function Homepage()
{

  
  let user= JSON.parse(localStorage.getItem('user-info'))
    

  function registerbutton() {
      document.getElementById("registercontainer").style.display ="block";
      document.getElementById("logincontainer").style.display ="none";
    }

    function loginbutton() {
      document.getElementById("logincontainer").style.display ="block";
      document.getElementById("registercontainer").style.display ="none";
    }



    
    return(
        <div className="container-fluid p-0 m-0">
          
          <div className="piodos-navigation-items">
            <NavBar/>
          </div>

          <div className="container-fluid piodos-body-content" style={{marginBottom:"6%"}}>

            <div className="row p-5">
                  <div className="col-lg-6 d-flex flex-column justify-content-center ms-5 mt-3">
                      <h1 className="display-2" style={{fontWeight:"500"}}>
                          Welcome to MLGCL COVID-19 Contact Tracing System!
                      </h1>

                      <h6 className="subhead pt-4" style={{color:"#737475" }}>
                          MLGCL COVID-19 Contact Tracing System is the MLGCL's unofficial contact tracing system. We aim to manage the spread of COVID-19 to keep our students, instructors and staffs safe and healthy.
                      </h6>

                      {/* logincontainer */}
                      <div className="logincontainer mt-5" id="logincontainer">

                          <h1>
                              I'd like to <span className="fw-bold" style={{color:"#06ABD5"}}>login</span> as an
                          </h1>

                          <div className="mt-5 mb-4 d-flex">
                            
                              {/* <button class="learn-more">
                              <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                              </span>
                              <span class="button-text">Individual</span>
                              </button> */}


                                <div className="me-5">
                                  <a href="/login" class="btn btn-white btn-animate">Individual</a>
                                </div>

                                <div className="ms-2">
                                  <a href="/login" class="btn btn-white btn-animate">Establishment</a>
                                </div>
                                
                             
                             



                              {/* <Link to="/login">
                              <button className="btn logincontainerhover">Individual</button>
                              </Link>

                              <Link to="/login">
                              <button className="btn ms-3 logincontainerhover">Admin</button>
                              </Link> */}
                          </div>
                      

                          <h6 className="mt-5">
                              Don't have an account yet? <span className="fw-bold" style={{color:"#06ABD5", cursor:"pointer"}} onClick={registerbutton}>Register Now</span>
                          </h6>

                      </div>


                      {/* registercontainer */}
                      <div className="registercontainer mt-5" id="registercontainer">
                                  
                      <h6>
                              I'd like to <span className="fw-bold" style={{color:"#06ABD5"}}>register</span> as an
                          </h6>

                          <div className="mt-4 mb-4">
                              <Link to="/register">
                              <button className="btn register-btn registercontainerhover" >Individual</button>
                              </Link>

                              <Link to="/register">
                              <button className="btn ms-3 register-btn registercontainerhover">Admin</button>
                              </Link>
                          </div>
                      

                          <h6 className="mt-4">
                              Already have an account? <span className="fw-bold" style={{color:"#06ABD5", cursor:"pointer"}} onClick={loginbutton}>Login Now</span>
                          </h6>


                      </div>

      
                      </div>
                          <div className="col-lg-5 mt-5 pt-5 overflow">
                          <img src={Contact} width="110%" />


                  </div>
              </div>

                   
          </div>


          {/* <div className="col piodos-footer-part" style={{position:"relative", bottom:"0px", width:"100%"}}>
            <Footer />
          </div> */}
        </div>
    )
}
export default Homepage;