import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import logo from '../../images/logo.png';
import threebar from '../../images/threebarimage.png'
const Navbar = () => {
  const {totalUniqueItems}=useCart();
  return (
    <div className='NavBar-main'>
       <div className='news'> WELCOME TO BHOOMI EandD TRADING COMPANY'S OFFICIAL WEBSITE!</div>
       <div className='Navbar-logo'>
        <div style={{'display':'flex','alignItems':'center'}}><div id='relo' onClick={()=>{open()}} style={{'border':'3px solid #ffbd59','fontSize':'32px','width':'40px','height':'45px','color':"#ffbd59",'marginLeft':'5px','textAlign':'center','borderRadius':'5px'}}><FontAwesomeIcon icon="fa-solid fa-bars" /></div><Link to='/'><img src={logo} alt="logo"/></Link></div>
       <div className='icons' style={{color:"black"}}>
       <Link to='/cart' style={{'textDecoration':'inherit','color':'inherit'}}><div className='cart-icon'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /><div className='small-number'>{totalUniqueItems}</div></div></Link></div>
       </div>
       <div className='opening-navbar' id='relo1'>
       <div className='mbar-close' onClick={()=>{close()}}>&times;</div>
        <div style={{'marginTop':'60px','marginBottom':'100px','zIndex':3}}>        
            <Link to={'/'} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Home</div></Link>
            <Link to={'/panellights'} onClick={()=>{close()}} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Panel Lights</div>
            </Link>
            <Link to={'/floodlights/'} onClick={()=>{close()}} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Flood Lights</div>
            </Link>
            <Link to={'/streetlights/'} onClick={()=>{close()}} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Street Lights</div>
            </Link>
            <Link to={'/concealedlights/'} onClick={()=>{close()}} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Concealed Lights</div>
            </Link>
            <Link to={'/walllights/'}onClick={()=>{close()}}  style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Wall Lights</div>
            </Link>
            <a href={'tel:+918770035694'}onClick={()=>{close()}}  style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Call Us</div>
            </a>
            <a href={'https://www.google.com/maps/place/BHOOMI+E%26D+TRADING+COMPANY/@26.2143357,78.2131545,15z/data=!4m5!3m4!1s0x0:0x85479ba59281c7ab!8m2!3d26.2143357!4d78.2131545'} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Store Locator</div>
            </a>
            <Link to={'/trackorder'} onClick={()=>{close()}} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>Track Order</div>
            </Link>
            <Link to={'/'} style={{'color':'inherit','textDecoration':'none'}}><div className='mbar-name'>About Us</div></Link>
        </div>
        </div>
       <div className='UnderNavbar'>
        <div className='under-content'>
        <Link to='/' style={{'textDecoration':'inherit','width':'200px'}} ><div className='Navbar-content'>HOME</div></Link>
        <Link to='/floodlights/' style={{'textDecoration':'inherit','width':'200px'}}><div className='Navbar-content'>FLOOD LIGHTS</div></Link>
        <Link to='/panellights/' style={{'textDecoration':'inherit','width':'200px'}}><div className='Navbar-content'>PANEL LIGHTS</div></Link>
        <Link to='/walllights/' style={{'textDecoration':'inherit','width':'200px'}}><div className='Navbar-content'>WALL LIGHTS</div></Link>
        <Link to='/streetlights/' style={{'textDecoration':'inherit','width':'200px'}}><div className='Navbar-content'>STREET LIGHTS</div></Link>
        <Link to='/concealedlights/' style={{'textDecoration':'inherit','width':'200px'}}><div className='Navbar-content'>CONCEALED LIGHTS</div></Link>
        <Link to='/trackorder/' style={{'textDecoration':'inherit','width':'200px'}}><div className='Navbar-content' style={{color:"#d92126",fontWeight:"600"}}>TRACK ORDER</div></Link>
        </div>
       </div>
    </div>
  )
}
function open(){
  document.getElementById('relo1').style.transform='translateX(0%)';
}

function close(){
  document.getElementById('relo1').style.transform='translateX(-100%)';
}
export default Navbar;
