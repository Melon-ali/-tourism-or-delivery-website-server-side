import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid">
      <div className="row bg-dark text-white p-3 mt-5 overflow-hidden">
        <div className="col-lg-4 col-12 overflow-hidden">
          <h3><span className="spa">Getaway</span> Tourism</h3>
          <h4>Latest <span className="title">Posts</span></h4>
          <p>August 30, 2021</p>
          <p>How To Take Better Photos?</p>
        </div>
        <div className="col-lg-4 col-12 mt-lg-0 mt-5 overflow-hidden">
            <i class="fab fa-instagram me-4 hover"></i>
            <i class="fab fa-twitter me-4 hover"></i>
            <i class="fab fa-facebook me-4 hover"></i>
            <i class="fab fa-dribbble me-4 hover"></i>
            <i class="fab fa-linkedin-in hover"></i>
            <div className="title">
                <h6>-Instagram</h6>
                <h6>-Twitter</h6>
                <h6>-Facebook</h6>
                <h6>-Dribbble</h6>
                <h6>-Linkedin</h6>
            </div>
        </div>
        <div className="col-lg-4 col-12 mt-lg-0 mt-3 overflow-hidden ">
            <h4 className="mb-3"><span className="title">All</span> Time <span className="title">Tourism</span> Support</h4>
            <h5>Rajshahi ,Bangladesh</h5>
            <h6>+8801738349069 || +8801723721524</h6>
            <h6>E-mail: melonali200@gmail.com</h6>
        </div>
        
      </div>
    </div>
    );
};

export default Footer;