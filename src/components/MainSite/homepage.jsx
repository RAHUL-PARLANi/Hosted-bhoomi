import React, { useEffect } from 'react'
import Footer from './footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Helmet from 'react-helmet'
import Navbar from './navbar'
import { Carousel } from 'react-responsive-carousel';
import Reviews from './reviews';
import Bestsellers from './bestsellers';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png'
import { useState } from 'react';
import axios from "axios"
import AOS from "aos";
import Slimage from '../../images/streetlights.jpg';
import flimage from '../../images/FlCatalog.jpg';
import save from '../../images/saveenergy.jpg';
import mk from '../../images/makeinindia.jpg';
import eef from '../../images/energy-efficient.jpg';
import cs from '../../images/customer-satisfaction.jpg';

const Homepage = () => {
    const [index,setIndex]=useState(1)
    const [name, setname] = useState('')
    const [no,setno]=useState('')
    const [address, setaddress] = useState('')
    const [desc ,setdesc]=useState('')
   
    useEffect(() => {
        AOS.init(
            {
                duration : 1000
              } 
        );
       setTimeout(() => {
        document.getElementById('form-closed').style.display='block' 
        }, 2000); 
     window.scrollTo(0,0)
      }
    , [index])
    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/service/add',{
            'Name': name ,
            'Address':address,
            'No':no,
            'Description':desc 
        }).then(res=>{alert(res.data.message)})
    }
    
  return (
   <> <Helmet>
   <meta
     name="description"
     content="we “BHOOMI E & D TRADING COMPANY” is a Manufacturer of the wide spectrum Hanging Chandeliers,LED Lights,Gate Lights etc. We are manufacturing these products using premium grade raw material that is procured from the authentic vendors of the market. We offer these products at reasonable rates and deliver these within the promised time-frame."
   />
   <title>BHOOMI E & D TRADING COMPANY</title>
   </Helmet> 
      <Navbar/>
      
         <div className='pop'>
        <form className='Service-from' id='form-closed' data-aos="fade-left" data-aos-duration="800"   data-aos-easing="ease-in-back" onSubmit={handleSubmit} >
            <div style={{
            right:'20px','position':'absolute','fontSize':'25px','cursor':'pointer'}} onClick={()=>{jh()}}>&times;</div>
            <img src={logo} alt='logo'/>
            <div className='Tittle' >WANT OUR SERVICES FILL THE FORM ?</div>
            <div className='form-box1'><label>Name :</label><input value={name} required onChange={(e)=>{setname(e.target.value)}} /></div>
            <div className='form-box1'><label>Phone Number :</label><input type={'tel'} required onChange={(e)=>{setno(e.target.value)}} /></div>
            <div className='form-box1'><label>Address :</label><input required onChange={(e)=>{setaddress(e.target.value)}} type={'text'}/></div>
            <div className='form-box1'><label>Service Description :</label><textarea  required onChange={(e)=>{setdesc(e.target.value)}}/></div>
            <div><button className='button-form' type='submit'>Submit</button></div>
            
        </form>
      <div className='slideshow' >
      <Carousel autoPlay autoFocus useKeyboardArrows transitionTime={0}  showThumbs={false} showStatus={false} swipeable={true} dynamicHeight infiniteLoop  >
        <div className='slide'>
            <img alt="" src="https://d1tlw8zlp8jxtb.cloudfront.net/pub/media/wysiwyg/wysiwyg/new1.jpg" />
        </div>
        <div className='slide'>
            <img alt="" src="https://d1tlw8zlp8jxtb.cloudfront.net/pub/media/wysiwyg/wysiwyg/new2.jpg" />
        </div>
        <div className='slide'>
            <img alt="" src="https://d1tlw8zlp8jxtb.cloudfront.net/pub/media/wysiwyg/wysiwyg/new3.jpg" />
        </div>
        
        <div className='slide'>
            <img alt="" src="https://d1tlw8zlp8jxtb.cloudfront.net/pub/media/wysiwyg/wysiwyg/new4.jpg" />
        </div>
      </Carousel>
      </div>
    <div className='box-bestsellers'  >
    <div></div>
    <div className='heading3' data-aos="fade-down">
      BHOOMI E & D TRADING COMPANY
    </div>
    <div className='Contenthero' data-aos="zoom-in-up">
    At Bhoomi light, gwalior, we offer wide range of LED lighting products. Our portfolio
    A includes general lighting, commercial lighting, Industrial Lighting etc.
    We truly believe in making environment friendly lighting solutions and have been
    focused on latest technology & innovation for developing energy efficient
    products.
    <div className='heading2' style={{'textAlign':'center','color':'#7b283c'}}>
        WHY US?
    </div>
    <div className="whyus">
    <div className="card3">
    <img src={mk} alt='mk'/>
    <div className="textarea">We follow the principle of <b style={{'color':'#7b283c'}}>Make in India</b> and serve the nation by processing
    most of the raw material available in India.</div></div>
    <div className="card3" style={{'flexDirection':'row-reverse'}}>
    <img src={cs} alt='cs'/>
    <div className="textarea"><b style={{'color':'#7b283c'}}>Customer satisfaction</b> is our prime objective.</div></div>
    
    <div className="card3">
    <img src={eef} alt='ss'/>
    <div className="textarea">We make <b style={{'color':'#7b283c'}}>energy efficient yet economical products</b> with the help of latest
    technology & innovations.</div></div>
    <div className="card3" style={{'flexDirection':'row-reverse'}}>
    <img src={save} alt='s'/>
    <div className="textarea" >Our latest product range offers principle of ,<b style={{'color':'#7b283c'}}>“SAVE ENERGY-SAVE THE
    ENVIRONMENT & ENHANCED VALUE FOR MONEY”.</b></div></div>
    </div>
    </div>
   
    <div className='heading3'>
            OUR BEST SELLING PRODUCTS
    </div>
    <div style={{'display':'flex','flexWrap':'wrap',justifyContent:'left',width:'90%',marginLeft:'auto',marginRight:'auto'}}>
    <div className='heading2' data-aos="zoom-in">TOP THREE FLOOD LIGHTS</div>
    <Bestsellers title={'FLOOD LIGHTS'}  />
    <div className='heading2' data-aos="zoom-in">TOP THREE CONCEALED LIGHTS</div>
    <Bestsellers title={'CONCEALED LIGHTS'} />
    <div className='heading2' data-aos="zoom-in">TOP THREE PANEL LIGHTS</div>
    <Bestsellers title={'PANEL LIGHTS'} />
    <div className='heading2' data-aos="zoom-in">TOP THREE STREET LIGHTS</div>
    <Bestsellers title={'STREET LIGHTS'}/>
    <div className='heading2' data-aos="zoom-in">TOP THREE WALL LIGHTS</div>
    <Bestsellers title={'WALL LIGHTS'} />
    </div>
    </div>
    <div className='shopbycategory' >
        <div className='heading3' data-aos="fade-down">
            SHOP BY COLLECTION
        </div>
        <div className='all-p1'>
            <Link to="/floodlights/" style={{'textDecoration':'inherit','color':'inherit'}}><div  data-aos="zoom-in-up" className='card2'>
                <img alt="FLOOD LIGHTS" src={flimage}/>
                <div className='title-card2'>FLOOD LIGHTS</div>
                <button className='Shopnow'>SHOP NOW</button>
            </div></Link>
            <Link to="/panellights/" style={{'textDecoration':'inherit','color':'inherit'}}>
            <div className='card2'  data-aos="zoom-in-up">
                <img alt="PANEL LIGHTS" src='https://5.imimg.com/data5/LL/SV/GLADMIN-3282119/led-panel-lights-500x500.png'/>
                <div className='title-card2'>PANEL LIGHTS</div>
                <button className='Shopnow'>SHOP NOW</button>

            </div></Link>
            <Link to="/walllights/" style={{'textDecoration':'inherit','color':'inherit'}}>
            
             <div className='card2'  data-aos="zoom-in-up">
             <img alt="PANEL LIGHTS" src='https://5.imimg.com/data5/FA/XL/IQ/SELLER-2928888/up-down-outdoor-light-500x500.jpeg'/>
            <div className='title-card2'>WALL LIGHTS</div>
            <button className='Shopnow'>SHOP NOW</button>

            </div></Link>
            <Link to="/streetlights/" style={{'textDecoration':'inherit','color':'inherit'}}>
            
            <div className='card2'  data-aos="zoom-in-up">
                <img alt="Streetlight LIGHTS" src={Slimage}/>
               
                <div className='title-card2'>STREET LIGHTS</div>
                <button className='Shopnow'>SHOP NOW</button>

            </div></Link>
            <Link to="/concealedlights/" style={{'textDecoration':'inherit','color':'inherit'}}>
           
            <div className='card2'  data-aos="zoom-in-up">
                <img alt="Concealed lights" src='data:image/jpeg;base64,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'/>
                <div className='title-card2'>CONCEALED LIGHTS</div>
                <button className='Shopnow'>SHOP NOW</button>

            </div></Link>
        </div>
      </div>
      <div className='heading3' data-aos="fade-down">
            CUSTOMER REVIEWS
      </div>
        <Reviews/>
    </div>
    
    <Footer/>
    </>
  )
}
function jh(){
    document.getElementById('form-closed').style.display='none'
}
export default Homepage
