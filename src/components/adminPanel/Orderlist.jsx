import React from 'react'
import Navbar from "../adminPanel/NavBarAdmin"
import {useEffect ,useState} from 'react';
import axios from 'axios'
const OrderList =()=>{
const [data,setData] = useState([])
const [ds,setds]=useState("")
useEffect(() => {
  axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/order/').then(
    res=>setData(res.data)
  )
})
const handlesubmit=(id)=>{
  axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/order/dileveryStatus/'+id,{
    DeliveryStatus:ds
}).then(
    res=>{alert(res.data.Message)})
}
const deletecal=(id)=>{
  axios.delete('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/order/'+id).then(
    res=>{alert(res.data.Message)})
}
const cancelcal=(id)=>{
  axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/order/Cancel/'+id).then(
    res=>{alert(res.data.Message)})
}
    return(<>
        <Navbar/>
        <div className='orderlist' >
            <div className='Title-homepage-Table '>All Orders</div>
            <div className='order-card'>
            {data.map(elemt=>{
                return <div className='order-card-inter' key={elemt._id}>
                <li><div className='labels' style={{width:'45%'}}>Customer Name:</div><div className='dtata' style={{width:'45%'}}>{elemt.CustomerName}</div></li>
                <li><div className="labels" style={{width:'45%'}}>Customer Address:</div><div className='dtata' style={{width:'45%'}}>{elemt.CustomerAddress}</div></li>
                <li><div className="labels" style={{width:'45%'}}>Customer Phone Number:</div><div className='dtata' style={{width:'45%'}}>{elemt.CustomerNo}</div></li>
                <li><div className="labels" style={{width:'45%'}}>Delivery Status :</div><div className='dtata' style={{width:'45%'}}>{elemt.DeliveryStatus}</div></li>
                <li><div className='labels' style={{width:'45%'}}>Cancel: </div><div className='dtata' style={{width:'45%',color:'red'}}>{elemt.Cancel}</div></li>
                <li><div className='labels' style={{width:'45%'}}>Total Billing Amount:</div><div className='dtata' style={{width:'45%',color:'green'}}><b>{elemt.totalBilling}/-</b></div></li>
                <li><div className='labels' style={{width:'45%'}}>Unique Items: </div><div className='dtata' style={{width:'45%'}}>{elemt.totalUnique}</div></li>
                <li><div className='labels' style={{width:'45%'}}>Total Items: </div><div className='dtata' style={{width:'45%'}}>{elemt.totalItem}</div></li>
                <li><div className='labels' style={{width:'45%'}}>TrackingID: </div> <div className='dtata' style={{width:'45%'}}>{elemt.trackingID}</div></li>
                <li><div className='labels' style={{width:'45%'}}>Order Timing: </div><div className='dtata' style={{width:'45%'}}>{elemt.date}</div></li>
               
                <table style={{'marginTop':'20px'}}>
                <thead>
                  <tr>
                    <th style={{textAlign:'left',height:'30px'}}>PRODUCT DETAILS</th>
                  </tr>
                   <tr style={{'borderTop':'2px solid black'}}>
                    <th style={{width:'200px'}}>Product Name</th>
                    <th style={{width:'200px'}}>Price</th>
                    <th style={{width:'200px'}}>Quantity</th>
                    <th style={{width:'200px'}}>Net Amount</th>
                   </tr>
                </thead>
                <tbody id='table21'>
                {elemt.products.map(elem=>{return <tr key={elem.id}>
                    <td >{elem.name}</td>
                    <td >{elem.price}/-</td>
                    <td >{elem.quantity}</td>
                    <td >{elem.itemTotal}</td>
                  </tr>
                  
                })}
                </tbody>
            </table>
            <div className="buttonscta">
            <button className='delete-button' onClick={()=>{deletecal(elemt._id)}}>Delete order</button>
            <button className='delete-button' onClick={()=>{cancelcal(elemt._id)}}>Cancel order</button>
            <div>
            <select
                  type="text" 
                  className=""
                  value={ds}
                  onChange={e=>{setds(e.target.value)}}
                  >   <option value="">UPDATE DELIVERY STATUS HERE</option>
                      <option value="ORDER RECEIVED">ORDER RECEIVED</option>
                      <option value="PROCESSING STOCK">PROCESSING STOCK</option>
                      <option value="READY FOR PACKING">READY FOR PACKING</option>
                      <option value="READY TO DELIVER">READY TO DELIVER</option>
                      <option value="DELIVERED">DELIVERED</option>
                  </select>
                  <button className='edit-button' onClick={()=>{handlesubmit(elemt._id)}}>Update</button>
              </div>  
            </div>
            </div>
            })}
            </div>
        </div>
    </>)
}
export default OrderList