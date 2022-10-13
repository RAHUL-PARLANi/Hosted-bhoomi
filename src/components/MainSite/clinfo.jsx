import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Helmet from 'react-helmet';
import axios from "axios";
import Navbar from './navbar';
import energy from "../../images/download-removebg-preview.png"
import saveenergy from "../../images/save_energy-removebg-preview.png"
import makeinindia from "../../images/Make-In-IndiaLogo.png"
import Footer from './footer';
import { useCart } from "react-use-cart";
import { useState , useEffect} from 'react';

function wtp(){
    axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl/WTP/'+window.location.pathname.split('/').pop()).then(
        alert('Liked')
    )
    window.location=window.location.href
    
}
function invite(){
    window.open(
        "whatsapp://send?text=Hi, Checkout this amazing Concealed Light of Bhoomi " + window.location.href,

        // This is what makes it 
        // open in a new window.
        '_blank' )
}
    

const DLinfo = () => {
    const [data,setData]=useState([]);
    const [data1,setData1]=useState([]);
    const { addItem, inCart, setCartMetadata } = useCart();
    useEffect(() => {
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl/'+window.location.pathname.split('/').pop())
                    .then(res => {
                        
                            setData(res.data)
                         
                    })
                    .catch(function (error){
                        console.log(error);
                    })
                    axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl/')
                    .then(res => {
                        setData1(res.data)    
                    })
                    .catch(function (error){
                        console.log(error);
                    })
           
                   window.scrollTo(0,0)
                
            
    }, [])
    
    return (
                    <>
                    <Helmet>
                        <title>
                            {String(data.productProductCode)} - BHOOMI E & D TRADING COMPANY
                        </title>
                        <meta
                       name="description"
                       content="Bhoomi E & D Trading Company Concealed light"
                     />
                    </Helmet>
                     <Navbar/>
                     
                    <div className='ProductView' >
                    <div className='Upper-part'>
                    <div className='Image-part'>
                    <div className='Small-img'>
                        <img className='mini-image' onClick={()=>{imgChangerlite(data.productImage)}} src={data.productImage} width='100px' height='100px' alt='product1'/>
                        <img className='mini-image' onClick={()=>{imgChangerlite(data.productImage2)}} src={data.productImage2} width='100px' height='100px' alt='side view of product1'/>
                        <img className='mini-image' onClick={()=>{imgChangerlite(data.productImage3)}} src={data.productImage3} width='100px' height='100px' alt='side view of product1'/>
                    </div>
                     <div className='Main-img'>
                    <img  id="MainImg" src={data.productImage} width='400px' height='400px' alt='product1'/>
                    </div>
                    </div>
                    <div className='Detail-part'>
                        <div className='main-points'>
                        <div className='product-name'>{data.productProductCode}</div>
                        <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{data.productRupees}/-</div>
                        </div>
                        <div className='Key-points'>
                            <div className="li"><div className='tags'>Category :</div> {data.productCategory}</div>
                            <div className="li"><div className='tags'>Available :</div> {data.productAvailable}</div>
                            <div className="li"><div className='tags'>Likes :</div> {data.productWTP} <FontAwesomeIcon icon="fa-solid fa-heart" /></div>
                        </div>
                    <div className='cta'><button onClick={() =>
                        
                        addItem({ id: data._id, name: data.productProductCode, price: data.productRupees })
                      }
        >ADD TO CART</button> <div className='button-icons-like' ><a href='https://wa.me/+918770035694' style={{'color':'inherit'}}><FontAwesomeIcon icon="fa-solid fa-message" /></a></div><div className='button-icons-like' onClick={wtp}><FontAwesomeIcon icon="fa-solid fa-heart" /></div><div className='button-icons' onClick={()=>{invite()}} ><FontAwesomeIcon icon="fa-solid fa-share-nodes" /></div></div>
                    </div>
                    </div>
                    <div className='Key-valid'>
                         <div className='div'><img src={makeinindia} width='180px' height='100px' alt='Make in india'></img><div style={{color:'black',fontWeight:'bold'}}>Make in India</div></div>    
                         <div className='div'><img src={energy} width='110px' height='95px' alt='Make in india'></img><div style={{color:'black',fontWeight:'bold'}}>Save Energy - Save Envirnoment</div></div>    
                         <div className='div'><img src={saveenergy} width='120px' height='80px' alt='Make in india'></img><div style={{color:'black',fontWeight:'bold'}}>Energy Efficient</div></div>    
                    </div>
                    <div className='under-main'>
                    <div className='discription'>
                         <div className='Information-tag'>Description</div> <div className='label-content-para'>
                         {data.productNote}
                         </div>
                         </div>
                        <div className='Information-tag'>Details</div>
                            <div className='point-1'>
                            <div className='point-2'><div className='labels'> Watt</div><div className='label-content'>{data.productWatt}</div></div>
                            <div className='point-2'><div className='labels'> Model</div><div className='label-content'>{data.productModel}</div></div>
                            <div className='point-2'><div className='labels'> Dimensions</div><div className='label-content'>{data.productLength}mm by {data.productWidth}mm by {data.productHight}mm</div></div>
                            <div className='point-2'><div className='labels'> Cut Out</div><div className='label-content'>{data.productCutOut}mm</div></div>
                            <div className='point-2'><div className='labels'> Operating Voltage</div><div className='label-content'>{data.productOperatingVoltage}</div></div>
                            <div className='point-2'><div className='labels'> IP Rating</div><div className='label-content'>{data.productIPRating}</div></div>
                            <div className='point-2'><div className='labels'> Power Factor</div><div className='label-content'>{data.productPowerFactor}</div></div>
                            <div className='point-2'><div className='labels'> CRI</div><div className='label-content'>{data.productCRI}</div></div>
                            <div className='point-2'><div className='labels'> Surge</div><div className='label-content'>{data.productSurge}</div></div>
                            <div className='point-2'><div className='labels'> Colour Available</div><div className='label-content'>{data.productAvailable}</div></div>
                            <div className='point-2'><div className='labels'> Colour Temperature</div><div className='label-content'>{data.productColourTemp}</div></div>
                             </div>
                     </div>
                    <div className='Recommended-Products'>
                        <div className='heading2'>RECOMMENDED PRODUCTS</div>
                            <div className='products'>
                            {
                            data1.filter(el=>{
                                return el.productCategory===data.productCategory
                            }).map(elemet=>{
                                return<><div className='card1'>
                            
                                <div className='image-card'>
                                    <img src={elemet.productImage}  alt='Main'/>
                                </div>
                                <div className='detail-card'>
                                    <div className='uper-details'>
                                    <div className='name'>{elemet.productProductCode}</div>
                                    <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {elemet.productRupees}/-</div>
                                    <div className='tags'>Watts :</div><div className='tags-details'> {elemet.productWatt}</div>
                                    <div className='tags'>Model :</div><div className='tags-details'> {elemet.productModel}</div>
                                    <div className='tags'>Dimensions :</div><div className='tags-details'> {elemet.productLength}mm by {elemet.productWidth}mm by {elemet.productHight}mm</div>
                                   </div>
                                <a href={'/concealedlight/'+elemet._id}><button className='view-more'>View More</button></a>
                                </div>
                                
                        </div>
                        </>
                            })}
                        </div>
                     </div>
                    </div>
                    <Footer/>
                    </>
                    )
                
}
function imgChangerlite(value) {
    document.getElementById('MainImg').src=value
}
export default DLinfo 