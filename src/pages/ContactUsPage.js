import React from 'react'
import Header from '../components/Header'
// import { ReactComponent as HomeIcon } from '../assets/svg/home.svg'
// import { ReactComponent as PhoneIcon } from '../assets/svg/phone.svg'
// import { ReactComponent as MailIcon } from '../assets/svg/mail.svg'
// import { ReactComponent as LinkIcon } from '../assets/svg/link.svg'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux';
import { setTab } from '../redux/actions/index';

function ContactUsPage({ sideBarFlag, setSideBarFlag }) {
  const dispatch = useDispatch()
  dispatch(setTab(3));
  return (
    <div className='ContactUsPage' onClick={() => setSideBarFlag(false)}>
      <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
      <div className='main'>
        {/* <img src={contactUsBack} alt="Contact Us Back" className='contact-us-back' /> */}
        <div className='card-container'>
          <div className='card'>
            <div className='main'>

              <div className='left'>
                <span className='title'>We'll get back to you soon.</span>
              </div>
              <div className='right'>
                <div className='input-box'>
                  <input type='text' placeholder='Full Name'></input>
                </div>
                <div className='input-box'>
                  <input type='email' placeholder='Email'></input>
                </div>
                <div className='input-box'>
                  <input type='phone' placeholder='Phone Number'></input>
                </div>
                <div className='input-box'>
                  <textarea type='text' placeholder='Your Message Here...'></textarea>
                </div>
                <div className='button'>Send</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUsPage