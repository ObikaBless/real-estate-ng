import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
const Hero = () => {
  return (
    <section className='hero-wrapper'>
       <div className="paddings innerWidth flexCenter hero-container">
            
            {/* the left section  */}
            <div className='flexColStart hero-left'>
                
                
                <div className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >
                        Discorver <br /> Most Siutable <br /> Property
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties that suit you at Comfort</span>
                    <span className='secondaryText'>We Connect you to best and trustworthy Real-Estate Agents </span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color='var(--blue)' size={25} />
                    <input type="text" placeholder='Enter search Location'/>
                    <button className="button">
                        Search 
                    </button>
                </div>

                <div className="flexCenter stats">

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1850} end={2000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
            </div>

                {/* the right section  */}
            <div className='flexCenter hero-right'>
                <motion.div className="image-container"
                initial={{ x:"7rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 2,
                    type: 'spring'
                }}
 
                >
                    <img src="./hero-image.png" alt="hero image" />
                </motion.div>
            </div>
       </div>
    </section>
  )
}

export default Hero
