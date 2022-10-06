import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCart } from 'react-use-cart';
import Navbar from './navbar';
import Footer from './footer';
import axios from "axios"; 

const Checkout = () => {
const [date,setdate]=useState("");
const [sec,setSec]=useState("");
const [name,setName]=useState("");
const [address,setAddress]=useState("");
const [phoneNumber,setPhoneNumber]=useState('');
const {cartTotal,totalUniqueItems,items,totalItems} = useCart();

useEffect(() => {
  var today=new Date()
setdate(
  today.toUTCString()
)
setSec(
  today.getMilliseconds()
)  
}, [])


const order=(e)=>{
  e.preventDefault();
  document.getElementById('pop').style.display='block';
  let Orderinfo={
      CustomerName:name,
      CustomerAddress:address,
      CustomerNo:phoneNumber,
      totalBilling:cartTotal,
      date:date,
      totalUnique:totalUniqueItems,
      totalItem:totalItems,
      trackingID:cartTotal+totalUniqueItems+totalItems+sec,
      products:items
    }
    
    axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/order/add',Orderinfo).then(res=>{
      alert(res.data.Message +" Your Tracking ID is "+(cartTotal+totalUniqueItems+totalItems+sec));
    }).catch(err=>{
      console.log(err)
    })
    window.scrollTo(0,0)
}
    return (
      <>
      <Navbar/>
      <div id='pop' className='Succsessfull-message'>
        <div >Your Order Has been Successfully been placed. Thanks for the ordering.
        Track Your order by id : {(cartTotal+totalUniqueItems+totalItems+sec)}
        </div>
        <div onClick={close}>
          &times;
        </div>
      </div>
      <div id=''>
      <div className='heading3'>CHECKOUT</div>
      <h4 style={{'textAlign':'center'}}>The Services are only availabe in Gwalior!</h4>
      <div className='check-out-info'>
        <h4 className='heading2' style={{'alignSelf':'center',fontWeight:'bold'}}>ORDER SUMMARY</h4>
        <table className='table99'>
        <thead>
        <tr>
            <th style={{'width':'300px' ,textAlign:'center'}}>
            PRODUCTS
            </th>
            <th style={{'width':'100px' ,textAlign:'center'}}>
            QUANTITY
            </th>
            <th style={{'width':'100px' ,textAlign:'center'}}>
            PRICE
            </th>
            <th style={{'width':'100px' ,textAlign:'center'}}>
            TOTAL PRICE
            </th>
        </tr>
      </thead>
      <tbody >
        {items.map((item) => (
          <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.quantity}</td> 
          <td><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{item.price}</td>
          <td><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{item.quantity * item.price}</td>
          </tr>
        ))}
      </tbody>
      </table>
      <div className='heading2' style={{'fontSize':'15px','alignSelf':'flex-start',paddingLeft:'10px',color:'#7b283c'}}>TOTAL BILLING AMOUNT : <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /><u>{cartTotal}/-</u></div>
      <div className='heading2' style={{ 'marginTop':"-10px",'fontSize':'15px','alignSelf':'flex-start',paddingLeft:'10px',color:'#7b283c'}}>PAYMENT METHOD : PAY ON DELVERY</div>
       <form className='check-out-form' onSubmit={order}>
          <div className='check-out-box'>
            <label>NAME : </label>
            <input type={'text'} value={name} required onChange={e=>setName(e.target.value)}/>
          </div>
          <div className='check-out-box'>
            <label>PHONE NUMBER : </label>
            <input type={'text'} value={phoneNumber} required onChange={e=>setPhoneNumber(e.target.value)} />
          </div>
          <div className='check-out-box'>
            <label>ADDRESS : </label>
            <textarea type={'text'} value={address} required onChange={e=>setAddress(e.target.value)} />
          </div>
          <div  className='cta'><button type='submit'>Place Order</button></div>    
      </form>
      
      </div></div>
      <Footer/>
    </>
    );
  }
  function close() {
    document.getElementById('pop').style.display='none'
  }


export default Checkout