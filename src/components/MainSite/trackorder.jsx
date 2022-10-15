import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './footer'
import Helmet from 'react-helmet'
import Navbar from './navbar'
import axios from 'axios'
const Trackorder = () => {
const [input, setinput] = useState('')
const [data,setdata]=useState([]);


const submit=()=>{
    axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/order/trackbyid',{'yoda':input}).then(
        res=>setdata(res.data))
     }
const cancelcal=(id)=>{
    axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/order/Cancel/'+id).then(
      res=>{alert(res.data.Message)})
  }
const View=()=>{
  useEffect(() => {
    window.scrollTo(0,0)
  
   }, [])
  
    return <>
            <div  className='Info' >
        <div className='boxer'><div className='info-main'>Delivery Status :</div><div className="info-main-data">{data?.DeliveryStatus}</div>
        </div><div className='boxer'><div className='info-label'>Name :</div><div className="info-data">{data?.CustomerName}</div>
        </div><div className='boxer'><div className='info-label'>Phone Number :</div><div className="info-data">{data?.CustomerNo}</div>
        </div><div className='boxer'><div className='info-label'>Address :</div><div className="info-data">{data?.CustomerAddress}</div>
        </div><div className='boxer'><div className='info-label'>Billing Amount :</div><div className="info-data">{data?.totalBilling}</div></div>
        <div className='boxer'><div className='info-label'>Canceling Status :</div><div className="info-data">{data?.Cancel}</div></div>
    <table className='table99' style={{marginTop:'20px'}}>
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
        {data?.products?.map((item) => (
          <tr key={item.id}>
          <td>{item?.name}</td>
          <td>{item?.quantity}</td> 
          <td><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{item?.price}</td>
          <td><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{item?.quantity * item?.price}</td>
          </tr>
        ))}
      </tbody>
      </table>
      <button className='clearfilter'style={{marginTop:'10px'}} onClick={()=>{cancelcal(data._id) }} >Cancel Order</button>
      </div>  

    
    </>
}

  return (<>
    <Helmet>
        <title>Track Order - Bhoomi E & D Trading Company</title>
        <meta
       name="description"
       content="Bhoomi E & D Trading Company Order Tracking System"
     />
      </Helmet>
    <Navbar/>
    <div style={{'backgroundColor':'#ff1616','marginTop':'-20px','paddingTop':'20px'}}>
    <div className='productfilter' >
               <div className="same tags option" >SEARCH BY ID :  <input  onChange={(e)=>{setinput(e.target.value)}} required style={{"border": "rgb(246, 155, 10) solid 1px","backgroundColor": "rgb(246, 155, 10)","borderRadius": "3px"}}/></div>
               <button onClick={()=>{submit()}} className='clearfilter'>TRACK ORDER</button>
    </div>
    </div>
    <View/>   
    <Footer/>
    </>

  )
  
}
export default Trackorder