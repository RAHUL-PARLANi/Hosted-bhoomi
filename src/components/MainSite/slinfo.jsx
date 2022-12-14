/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import axios from "axios";
import Navbar from './navbar';
import { Link, useParams } from "react-router-dom";
import energy from "../../images/download-removebg-preview.png"
import saveenergy from "../../images/save_energy-removebg-preview.png"
import makeinindia from "../../images/Make-In-IndiaLogo.png"
import Footer from './footer';
export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

export  class SLinfo extends Component {
    
        constructor(props){
        super();
        this.state = {
            data:[],
            data1:[]    
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.invite=this.invite.bind(this);
        }
    
    componentDidMount() {
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl/'+window.location.pathname.split('/').pop())
            .then(res => {
                this.setState({
                    data:res.data
                }) 
            })
            .catch(function (error){
                console.log(error);
            })
            axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl/')
            .then(res => {
                
                    let arr=[]
                    for (let index = 0; index < res.data.length; index++) {
                        if(res.data[index].productCategory===this.state.data.productCategory){
                            arr[index]= res.data[index];
                        }}
                    
                    this.setState({
                        data1:arr
                    }) 
                    
            })
            .catch(function (error){
                console.log(error);
            })
   
           window.scrollTo(0,0)
        
    }
    
    open(){
        document.getElementById('id01').style.display='block';
        axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl/WTP/'+this.state.data._id)
            .then(res => console.log(res.data));

    }
    
    
    close(){
        document.getElementById('id01').style.display='none'
        window.location=window.location.href
    }
    
    invite(){
    window.open(
        "whatsapp://send?text=Hi,Your friend want you to see this great product :" + window.location.href,
        '_blank' )
    }
    
    render() { 
        return (
            <>
            <Navbar/>
            <div className='ProductView'>
            <div className='Upper-part'>
            <div className='Image-part'>
            <div className='Small-img'>
                <div style={{'cursor':'pointer'}} ><img className='mini-image'  src='https://5.imimg.com/data5/AT/GP/MY-930421/t-5-led-tube-18-watts-500x500.jpg' width='100px' height='100px' alt='product1'/></div>
                <div style={{'cursor':'pointer'}} ><img className='mini-image'  src='https://5.imimg.com/data5/LY/LK/MY-930421/slim-panel-lights-500x500.png' width='100px' height='100px' alt='side view of product1'/></div>
                <div style={{'cursor':'pointer'}} ><img className='mini-image'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINr8aHbDc6fdhS39dRX5PlJta_6INOTO7TZRY2_cqK2mUZn6sQroSNs4oJ4y-O0MNWSU&usqp=CAU' width='100px' height='100px' alt='side view of product1'/></div>
            </div>
            <div className='Main-img'>
            <img id='1Id2' src='https://5.imimg.com/data5/AT/GP/MY-930421/t-5-led-tube-18-watts-500x500.jpg' width='400px' height='400px' alt='product1'/>
            </div>
            </div>
            <div className='Detail-part'>
                <div className='main-points'>
                <div className='product-name'>{this.state.data.productModelNo}</div>
                <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{this.state.data.productRupees}</div>
                </div>
                <div className='Key-points'>
                    <div className="li"><div className='tags'>Material Used :</div> Aluminium</div>
                    <div className="li"><div className='tags'>Available :</div> {this.state.data.productAvailable}</div>
                    <div className="li"><div className='tags'>Likes :</div> {this.state.data.productWTP} <FontAwesomeIcon icon="fa-solid fa-heart" /></div>
                </div>
            <div className='cta'><button>CHAT WITH US</button><div className='button-icons-like'><FontAwesomeIcon icon="fa-solid fa-heart" /></div><div className='button-icons'><FontAwesomeIcon icon="fa-solid fa-share-nodes" /></div></div>
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
                 Bhoomi Lighting LED Floodlights not only ensure savings on initial capital, but also deliver a long-lasting performance. Versatile enough to be used in a variety of environments, our LED Flood Lights can be utilized well for lighting sports arenas, fa??ades, general area lighting, billboards and other outdoor applications. When you choose LED floodlights from Bhoomi Lighting, you are selecting the world???s finest floodlighting luminaires.
                 </div>
                 </div>
                <div className='Information-tag'>Details</div>
                    <div className='point-1'>
                    <div className='point-2'><div className='labels'> Watt</div><div className='label-content'>{this.state.data.productWatt}</div></div>
                    <div className='point-2'><div className='labels'> Weight</div><div className='label-content'>{this.state.data.productWeight}</div></div>
                    <div className='point-2'><div className='labels'> Dimensions</div><div className='label-content'>{this.state.data.productLength}mm by {this.state.data.productWidth}mm by {this.state.data.productHight}mm</div></div>
                    <div className='point-2'><div className='labels'> Pol Dia</div><div className='label-content'>{this.state.data.productPolDia}</div></div>
                    <div className='point-2'><div className='labels'> Operating Voltage</div><div className='label-content'>{this.state.data.productOperatingVoltage}</div></div>
                    <div className='point-2'><div className='labels'> IP Rating</div><div className='label-content'>{this.state.data.productIPRating}</div></div>
                    <div className='point-2'><div className='labels'> Power Factor</div><div className='label-content'>{this.state.data.productPowerFactor}</div></div>
                    <div className='point-2'><div className='labels'> CRI</div><div className='label-content'>{this.state.data.productCRI}</div></div>
                    <div className='point-2'><div className='labels'> Surge</div><div className='label-content'>{this.state.data.productSurge}</div></div>
                    <div className='point-2'><div className='labels'> Colour Temperature</div><div className='label-content'>{this.state.data.productColourTemp}</div></div>
          
                   </div>
             </div>
             <div className='Recommended-Products'>
             <div className='heading2'>RECOMMENDED PRODUCTS</div>
                <div className='products'>              {
                    this.state.data1.map(elemet=>{
                        return<><div className='card1' style={{'height':'270px'}}>
                    
                        <div className='image-card'>
                            <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRP-55-_sjQxr_UU-7GoFTJ6AwZtYrF9T3XBTm_0iUvieivxClNeLDcjGJszPgslcYA3zuWmqyxrzBGLutiakkM8CPq73En9hUCXcQixba4muj4NqvL19UXQ&usqp=CAc'  alt='Main'/>
                        </div>
                        <div className='detail-card'>
                            <div className='uper-details'>
                        <div className='name'>{elemet.productModelNo}</div>
                        <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {elemet.productRupees}/-</div>
                        <div className='tags'>Watts :</div><div className='tags-details'> {elemet.productWatt}</div>
                        <div className='tags'>Pol Dia :</div><div className='tags-details'> {elemet.productPolDia}</div>
                        
                        <div className='tags'>Dimensions :</div><div className='tags-details'> {elemet.productLength}mm by {elemet.productWidth}mm by {elemet.productHight}mm</div>
                        </div>
                        <a href={'/streetlight/'+elemet._id}><button className='view-more'>View More</button></a>
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
         ;
         

    }
    
 }
 export default withRouter(SLinfo);
 */
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import React, { Component } from 'react';
 import axios from "axios";
 import Helmet from 'react-helmet'
 import Navbar from './navbar';
 import energy from "../../images/download-removebg-preview.png"
 import saveenergy from "../../images/save_energy-removebg-preview.png"
 import makeinindia from "../../images/Make-In-IndiaLogo.png"
 import Footer from './footer';
 import { useCart } from "react-use-cart";
 import { useState , useEffect} from 'react';
 
 function wtp(){
     axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl/WTP/'+window.location.pathname.split('/').pop()).then(
         alert('Liked')
     )
     window.location=window.location.href
     
 }
 
function invite(){
    window.open(
        "whatsapp://send?text=Hi, Checkout this amazing Street Light of Bhoomi " + window.location.href,

        // This is what makes it 
        // open in a new window.
        '_blank' )
}
 const SLinfo = () => {
     const [data,setData]=useState([]);
     const [data1,setData1]=useState([]);
     const { addItem, inCart, setCartMetadata } = useCart();
     useEffect(() => {
         axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl/'+window.location.pathname.split('/').pop())
                     .then(res => {
                         
                             setData(res.data)
                          
                     })
                     .catch(function (error){
                         console.log(error);
                     })
                     axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl/')
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
        <title>{String(data.productModelNo)} - Bhoomi E & D Trading Company</title>
        <meta
       name="description"
       content="Bhoomi E & D Trading Company Street Light"
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
                     <img id='MainImg' src={data.productImage} width='400px' height='400px' alt='product1'/>
                     </div>
                     </div>
                     <div className='Detail-part'>
                         <div className='main-points'>
                         <div className='product-name'>{data.productModelNo}</div>
                         <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{data.productRupees}</div>
                         </div>
                         <div className='Key-points'>
                             <div className="li"><div className='tags'>Category :</div>{data.productCategory}</div>
                             <div className="li"><div className='tags'>Available :</div> {data.productAvailable}</div>
                             <div className="li"><div className='tags'>Likes :</div> {data.productWTP}</div>
                         </div>
                     <div className='cta'><button onClick={() =>
                         
                         addItem({ id: data._id, name: data.productModelNo, price: data.productRupees })
                       }
         >ADD TO CART</button><div className='button-icons-like' ><a href='https://wa.me/+918770035694' style={{'color':'inherit'}}><FontAwesomeIcon icon="fa-solid fa-message" /></a></div> <div className='button-icons-like' onClick={wtp}><FontAwesomeIcon icon="fa-solid fa-heart" /></div><div className='button-icons' onClick={()=>{invite()}}><FontAwesomeIcon icon="fa-solid fa-share-nodes" /></div></div>
                     </div>
                     </div>
                     
                     <div className='under-main'>
                     <div className='discription'>
                          <div className='Information-tag'>Description</div> <div className='label-content-para'>
                          {data.productNote}
                          </div>
                          </div>
                         <div className='Information-tag'>Details</div>
                             <div className='point-1'>
                             <div className='point-2'>
                             <div className='labels'> Watt</div><div className='label-content'>{data.productWatt}</div></div>
                             <div className='point-2'><div className='labels'> Weight</div><div className='label-content'>{data.productWeight}</div></div>
                             <div className='point-2'><div className='labels'> Dimensions</div><div className='label-content'>{data.productLength}mm by {data.productWidth}mm by {data.productHight}mm</div></div>
                             <div className='point-2'><div className='labels'> Pol Dia</div><div className='label-content'>{data.productPolDia}</div></div>
                             <div className='point-2'><div className='labels'> Operating Voltage</div><div className='label-content'>{data.productOperatingVoltage}</div></div>
                             <div className='point-2'><div className='labels'> IP Rating</div><div className='label-content'>{data.productIPRating}</div></div>
                             <div className='point-2'><div className='labels'> Power Factor</div><div className='label-content'>{data.productPowerFactor}</div></div>
                             <div className='point-2'><div className='labels'> CRI</div><div className='label-content'>{data.productCRI}</div></div>
                             <div className='point-2'><div className='labels'> Surge</div><div className='label-content'>{data.productSurge}</div></div>
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
                                     <div className='name'>{elemet.productModelNo}</div>
                        <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {elemet.productRupees}/-</div>
                        <div className='tags'>Watts :</div><div className='tags-details'> {elemet.productWatt}</div>
                        <div className='tags'>Pol Dia :</div><div className='tags-details'> {elemet.productPolDia}</div>
                        
                        <div className='tags'>Dimensions :</div><div className='tags-details'> {elemet.productLength}mm by {elemet.productWidth}mm by {elemet.productHight}mm</div>
                        </div>
                        <a href={'/streetlight/'+elemet._id}><button className='view-more'>View More</button></a>
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
 export default SLinfo