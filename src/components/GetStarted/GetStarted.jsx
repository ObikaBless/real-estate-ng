import React from 'react';
import './Getstarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from us <br />
                    Find your residence soon
                </span>
                <buttton className="button">
                    <a href="mailto:real-estate.ng@gmail.com">Get Started</a>
                </buttton>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
