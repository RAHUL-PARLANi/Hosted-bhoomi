import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import Navbar from './navbar';
import Footer from './footer';
const Cart = () => {
useEffect(() => {
  window.scrollTo(0,0)
}, [])

const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    metadata
  } = useCart();

    if (isEmpty) return <><Navbar/><p className='os-title'>YOUR CART IS EMPTY, CHECK SOME AMAZING PRODUCTS <Link to='/'>HERE</Link></p><Footer/></>

  return (
    <>
    <Navbar/>
    <div id='mchecker'>
    <div className='heading3'>MY CART</div>
      <div className='gtasa' >
      <table className='table99'>
      <thead>
        <tr> 
            
            <th  className='yoda456' style={{'width':'300px' ,textAlign:'center'}}>
                PRODUCTS
            </th>
            <th className='yoda456' style={{'width':'100px' ,textAlign:'center'}}>
                QUANTITY
            </th>
            <th className='yoda456' style={{'width':'100px' ,textAlign:'center'}}>
                PRICE
            </th>
            <th className='yoda456' style={{'width':'100px' ,textAlign:'center'}}>
                TOTAL PRICE
            </th>
            <th className='yoda456' style={{'width':'160px' ,textAlign:'center'}}>
                ACTIONS
            </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
          <td style={{'color':'black', 'fontWeight':'600'}} >{item.name}</td>
          <td>{item.quantity}</td> 
          <td><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{item.price}</td>
          <td><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{item.quantity * item.price}</td>
          <td><button className='update-button'
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className='update-button'
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button  className='update-button' onClick={() => removeItem(item.id)}>&times;</button></td>
          </tr>
        ))}
      </tbody>
      </table>
      <div className='order-summary'>
        <div className='os-title'>ORDER SUMMARY</div> 
        <div className='sb'><div className='sb-total'>Sub Total: </div> <div className='sb-rupee'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{cartTotal}</div></div>
        <div style={{display:"flex","justifyContent":'space-around','marginTop':'10px'}}>{!isEmpty && <button className='cta-buttons' onClick={emptyCart}>EMPTY CART</button>}<Link to={'/checkout'}><button className='cta-buttons-1'>CHECK OUT</button></Link></div>
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}
export default Cart