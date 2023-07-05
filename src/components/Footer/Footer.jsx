import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <sectionn className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">


            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="logo" width={120} />

                <span className='secondaryText'>
                    Our Vision is to assist people <br />
                    find the best places to recide in. 
                </span>
            </div>

            {/* right side  */}

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>N0 21 ACHODO Street Owerri Imo state, Nigeria</span>

                <div className="flexCenter f-menu">
                    <span><a href="">Property</a></span>
                    <span><a href="">Services</a></span>
                    <span><a href="">Product</a></span>
                    <span><a href="">About Us</a></span>
                </div>
            </div>
        </div>
    </sectionn>
  )
}

export default Footer
