import React from 'react'
import logo from '../../images/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import FeedbackForm from './feedbackform'

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footerimg'></div>
    
      <div className='Footer-logo'><img src={logo} alt="logo" /></div>
      <div className='underFooter'>
      <div className='Category'>
      <div className='title'>FEEDBACK FORM</div>
        <FeedbackForm/>
      </div>
      <div className='Category'>
        <div className='title'>CATEGORIES</div>
        <Link to='/floodlights/' style={{'textDecoration':'inherit','color':'white'}} ><div className='title-content'>FLOOD LIGHTS</div></Link>
        <Link to='/panellights/' style={{'textDecoration':'inherit' ,'color':'white'}} ><div className='title-content'>PANEL LIGHTS</div></Link>
        <Link to='/walllights/' style={{'textDecoration':'inherit' ,'color':'white'}} ><div className='title-content'>WALL LIGHTS</div></Link>
        <Link to='/streetlights/' style={{'textDecoration':'inherit' ,'color':'white'}} ><div className='title-content'>STREET LIGHTS</div></Link>
        <Link to='/concealedlights/' style={{'textDecoration':'inherit' ,'color':'white'}} ><div className='title-content'>CONCEALED LIGHTS</div></Link>
       </div>
      <div className='Category'>
        <div className='title'>CUSTOMER SERVICE</div>
        <div className='title-content'>CONTACT</div>
        <div className='title-content'><FontAwesomeIcon icon="fa-solid fa-clock" /> MON-SUN - 10:00 AM TO 9:00 PM(IST)</div>
        <a style={{'textDecoration':'inherit','color':'white'}} href='tel:+918770035694'><div className='title-content'><FontAwesomeIcon icon="fa-solid fa-phone" /> +91 87700 35694</div></a>
        <a style={{'textDecoration':'inherit','color':'white'}} href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=BHOOMIENDTC@GMAIL.COM&su=Bhoomi%20Electonics&body=Write..'><div className='title-content'><FontAwesomeIcon icon="fa-solid fa-envelope" /> BHOOMIENDTC@GMAIL.COM</div></a>
        <div className='title-content'><FontAwesomeIcon icon="fa-solid fa-location-dot" /> SHIVAJI PARK, KUSMHARPURA, THATIPUR, GWALIOR, MADHYA PRADESH 474011</div>
      </div>
       <div className='Category'>
        <div className='title'>INFORMATION</div>
        <a style={{'textDecoration':'inherit','color':'white'}} href='https://www.google.com/maps/place/BHOOMI+E%26D+TRADING+COMPANY/@26.2143357,78.2131545,15z/data=!4m5!3m4!1s0x0:0x85479ba59281c7ab!8m2!3d26.2143357!4d78.2131545'><div className='title-content' style={{fontWeight:700}}>STORE LOCATOR</div></a>
        <div className='title-content'>PRIVACY POLICY</div>
        <div className='title-content'>ABOUT US</div>
        </div>
       </div>
       </div>
    <div className='credit'>
    <FontAwesomeIcon icon="fa-solid fa-copyright" /> BHOOMI EandD TRADING COMPANY 2022. ALL RIGHTS RESERVED.
    </div>
    <div className='creditME'>
    Developed and Designed by <a style={{'textDecoration':'inherit','color':'white'}} href='https://www.linkedin.com/in/rahul-parlani-b02a0a226/'><b>Rahul Parlani</b></a> of ITM.
    </div>
    </>
  )
}
export default Footer