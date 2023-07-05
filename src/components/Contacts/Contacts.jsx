import React from 'react';
import './Contacts.css'
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className='orangeText'>Our Contacts </span>
          <span className='primaryText'>Easy to Contact us</span>
          <span className='secondaryText'>We always ready to help by providing the best servies for your home choices </span>



          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>+234 8038 7749 80</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now 
                </div>
              </div>

              {/* second mode  */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Email</span>
                    <span className='secondaryText'>real-estate.ng@gmail.com</span>
                  </div>
                </div>
                <a className='linkto' href="mailto:blesschinedumobika@gmail.com">
                <div className="flexCenter button">
                  Quick Email 
                </div>
                </a>
              </div>
            </div>

            {/* second row */}
            {/* third mode  */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>+234 8038 7749 80</span>
                  </div>
                </div>
                <div className="flexCenter button">
                 Video Call Now 
                </div>
              </div>

              {/* fourth mode  */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>+234 8038 7749 80</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Message Now 
                </div>  
              </div>
            </div>
          </div>
        </div>

        {/* the right side  */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
