import React, { useEffect } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import { Carousel } from 'react-responsive-carousel';
import Reviews from './reviews';
import Bestsellers from './bestsellers';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png'
import { useState } from 'react';
import axios from "axios"
import AOS from "aos";
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
   <>  <Navbar/>
         <div className='pop'>
        <form className='Service-from' id='form-closed' data-aos="fade-down-right" data-aos-duration="800"   data-aos-easing="ease-in-back" onSubmit={handleSubmit} >
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
    <div className='heading3' data-aos="fade-down">
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
                <img alt="FLOOD LIGHTS" src='https://iili.io/PjCZjS.png'/>
                <div className='title-card2'>FLOOD LIGHTS</div>
                <button className='Shopnow'>SHOP NOW</button>
            </div></Link>
            <Link to="/panellights/" style={{'textDecoration':'inherit','color':'inherit'}}>
            <div className='card2'  data-aos="zoom-in-up">
                <img alt="PANEL LIGHTS" src='https://www.jainsonslightsonline.com/image/cache/led-lights/crompton-led-lights/crompton-led-recessed-panel-star-cosmos-round-550x550.JPG'/>
                <div className='title-card2'>PANEL LIGHTS</div>
                <button className='Shopnow'>SHOP NOW</button>

            </div></Link>
            <Link to="/walllights/" style={{'textDecoration':'inherit','color':'inherit'}}>
            
             <div className='card2'  data-aos="zoom-in-up">
             <img alt="PANEL LIGHTS" src='data:image/jpeg;base64,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'/>
            <div className='title-card2'>WALL LIGHTS</div>
            <button className='Shopnow'>SHOP NOW</button>

            </div></Link>
            <Link to="/streetlights/" style={{'textDecoration':'inherit','color':'inherit'}}>
            
            <div className='card2'  data-aos="zoom-in-up">
                <img alt="PANEL LIGHTS" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNol937nD61Id3o6ww9EAFUiZraEtj3_s1Q&usqp=CAU'/>
               
                <div className='title-card2'>STREET LIGHTS</div>
                <button className='Shopnow'>SHOP NOW</button>

            </div></Link>
            <Link to="/concealedlights/" style={{'textDecoration':'inherit','color':'inherit'}}>
           
            <div className='card2'  data-aos="zoom-in-up">
                <img alt="Concealed lights" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AhttqfEUSW8efEVoMoztrav4SlUSMc2xeQ&usqp=CAU'/>
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
