import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../images/logo.png"
const Navbar = () => {
  return (
    <>
      <div className='NavbarAdmin'>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/'><div className='Logo'><img src={logo} alt="logo"/></div></Link>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/'><div className='Nav-Contents-dash'><FontAwesomeIcon icon="fa-solid fa-chart-pie" /> DASHBOARD</div></Link>
        <div className='Nav-Contents'><FontAwesomeIcon icon="fa-solid fa-circle-dot" /> FLOOD LIGHTS</div>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/showFLs'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-list" /> SHOW ALL PRODUCTS</div></Link>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/addFL'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-plus" /> ADD A PRODUCT</div></Link>
        <div className='Nav-Contents'><FontAwesomeIcon icon="fa-solid fa-circle-dot" /> PANEL LIGHTS</div>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/showPLs'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-list" /> SHOW ALL PRODUCTS</div></Link>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/addPL'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-plus" /> ADD A PRODUCT</div></Link>
        <div className='Nav-Contents'><FontAwesomeIcon icon="fa-solid fa-circle-dot" /> CONCEALED LIGHTS</div>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/showCLs'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-list" /> SHOW ALL PRODUCTS</div></Link>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/addCL'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-plus" /> ADD A PRODUCT</div></Link>
        <div className='Nav-Contents'><FontAwesomeIcon icon="fa-solid fa-circle-dot" /> STREET LIGHTS</div>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/showSLs'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-list" /> SHOW ALL PRODUCTS</div></Link>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/addSL'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-plus" /> ADD A PRODUCT</div></Link>
        <div className='Nav-Contents'><FontAwesomeIcon icon="fa-solid fa-circle-dot" /> WALL LIGHTS</div>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/showWLs'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-list" /> SHOW ALL PRODUCTS</div>
        </Link><Link style={{textDecoration:'none',color:"inherit"}} to='/admin/addWL'><div className='Nav-Contents-Under'><FontAwesomeIcon icon="fa-solid fa-plus" /> ADD A PRODUCT</div></Link>
        <Link style={{textDecoration:'none',color:"inherit"}} to='/admin/order'><div className='Nav-Contents'><FontAwesomeIcon icon="fa-solid fa-circle-dot" /> ORDERS</div></Link>      
    </div>
    </>
  )
}

export default Navbar
