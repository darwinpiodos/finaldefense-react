import React from "react";

import NavBar from '../components/NavBar';
// import React from 'react';
// import HomepageLeft from './HomepageLeft';
// import HomepageRight from './HomepageRight';
// import Footer from './Footer';


function Homepage()
{



    
    return(
        <div className="container-fluid p-0 m-0">
          
          <div className="piodos-navigation-items">
            <NavBar/>
          </div>
          {/* <div className="container-fluid piodos-body-content" style={{marginBottom:"6%"}}>
            <div className='container-fluid col-lg-6 p-0'>
              <HomepageLeft/>
            </div>

            <div className='container-fluid col-lg-6 p-0'>
              <HomepageRight />
            </div> 
                   
          </div>

          <div className="col piodos-footer-part" style={{position:"relative", bottom:"0px", width:"100%"}}>
            <Footer />
          </div> */}
        </div>
    )
}
export default Homepage;