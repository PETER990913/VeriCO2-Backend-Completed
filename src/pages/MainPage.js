import React from 'react'
import Header from '../components/Header'
// import mainBack from '../assets/images/main-back.jpg'
import mainBack from '../assets/images/co2-Recovered4.png'
// import earthOnHand from '../assets/images/earth-on-hand.png'
import earthOnly from '../assets/images/earth-only.png'
import coTwoBubble from '../assets/images/co2-bubble.png'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTab } from '../redux/actions/index';

function MainPage({ sideBarFlag, setSideBarFlag }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  dispatch(setTab(0));
  return (
    <div className='MainPage' onClick={() => setSideBarFlag(false)}>
      <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
      <div className='main'>
        <img src={mainBack} alt="Main Back" className='main-back' />
        <div className='title-polygon'>
          <span>Automated Quantification</span> 
          <span> </span>
          <span>of Scope 3 Emissions</span>
          <div className='button' onClick={()=>navigate('/signup')}>Get Started</div>
        </div>
        {/* <img src={earthOnHand} alt="Earth on Hand" className='earth-on-hand' /> */}
        <img src={earthOnly} alt="Earth on Hand" className='earth-on-hand' />
        <div className='bubbles'>
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage