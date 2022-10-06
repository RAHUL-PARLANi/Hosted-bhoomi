import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from "aos";
import axios from "axios";
class Bestsellers extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        products:[],
        wl:[],
        pl:[],
        sl:[],
        cl:[]
      }

    }
    componentDidMount() {
      AOS.init({
        duration:1000
      })
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl/TopStreetlight/')
      .then(res => {
          
          this.setState({ sl: res.data })
          
      })
      .catch(error => console.log(error));

      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl/Topconcealedlights/')
      .then(res => {
          
          this.setState({ cl: res.data })
          
      })
      .catch(error => console.log(error));
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/wl/TopWalllights')
      .then(res => {
          
          this.setState({ wl: res.data })
          
      })
      .catch(error => console.log(error));
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/pl/toppanellight')
      .then(res => {
          
          this.setState({ pl: res.data })
          
      })
      .catch(error => console.log(error));

        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/fl/Topfloodlights/')
            .then(res => {
                
                this.setState({ products: res.data })
                
            })
            .catch(error => console.log(error));
            window.scrollTo(0,0);
    }
    bgsList() {
    {
      if(this.props.title=='FLOOD LIGHTS'){
          
      return this.state.products.map(products  => {
        return <>
        <Link className='linkstyiling' style={{'color':'inherit' , 'textDecoration':'inherit'}} to={"/floodlight/" + products._id} >
        <div className='card1' data-aos="zoom-in-up" key={products._id}>
              <div className='image-card'>
                  <div className='topMark'>#{products.productSerialNumber}</div>
                  <img src={products.productImage}  alt='Main'/>
              </div>
              <div className='detail-card'>
              <div className='uper-details'>
              <div className='name'>{products.productModelNo}</div>
              <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {products.productRupees}/-</div>
              <div className='tags'>Watts :</div><div className='tags-details'>{products.productWatt}</div>
              <div className='tags'>Weight :</div><div className='tags-details'> {products.productWeight}</div>
              <div className='tags'>Dimensions :</div><div className='tags-details'> {products.productLength}mm by {products.productWidth}mm by {products.productHight}mm</div>
              </div>
              <button className='view-more'>View More</button>
              </div>
            </div>
            </Link>
        </>
    })
    }
    else if(this.props.title=='PANEL LIGHTS'){
        
      return this.state.pl.map(products  => {
        return <>
        <Link className='linkstyiling' style={{'color':'inherit' , 'textDecoration':'inherit'}} to={"/panellight/" + products._id} >
        <div className='card1' data-aos="zoom-in-up" key={products._id}>
              <div className='image-card'>
                  <div className='topMark'>#{products.productSerialNumber}</div>
                  <img src={products.productImage}  alt='Main'/>
              </div>
              <div className='detail-card'>
              <div className='uper-details'>
              <div className='name'>{products.productProductCode}</div>
              <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {products.productRupees}/-</div>
              <div className='tags'>Watts :</div><div className='tags-details'>{products.productWatt}</div>
              <div className='tags'>Cut Out :</div><div className='tags-details'> {products.productCutOut}</div>
              <div className='tags'>Dimensions :</div><div className='tags-details'> {products.productLength}mm by {products.productWidth}mm by {products.productHight}mm</div>
              </div>
              <button className='view-more'>View More</button>
              </div>
            </div>
            </Link>
        </>
    })
    }else if(this.props.title=='WALL LIGHTS'){
        
      return this.state.wl.map(products  => {
        return <>
        <Link className='linkstyiling' style={{'color':'inherit' , 'textDecoration':'inherit'}} to={"/walllight/" + products._id} >
        <div className='card1' data-aos="zoom-in-up" key={products._id}>
              <div className='image-card'>
                  <div className='topMark'>#{products.productSerialNumber}</div>
                  <img src={products.productImage}  alt='Main'/>
              </div>
              <div className='detail-card'>
              <div className='uper-details'>
              <div className='name'>{products.productProductCode}</div>
              <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {products.productRupees}/-</div>
              <div className='tags'>Watts :</div><div className='tags-details'>{products.productWatt}</div>
              <div className='tags'>Type :</div><div className='tags-details'> {products.productType}</div>
             
              <div className='tags'>Dimensions :</div><div className='tags-details'> {products.productLength}mm by {products.productWidth}mm by {products.productHight}mm</div>
                        
              </div>
              <button className='view-more'>View More</button>
              </div>
            </div>
            </Link>
        </>
    })
    }else if(this.props.title=='STREET LIGHTS'){
        
      return this.state.sl.map(products  => {
        return <>
        <Link className='linkstyiling' style={{'color':'inherit' , 'textDecoration':'inherit'}} to={"/streetlight/" + products._id} >
        <div className='card1' data-aos="zoom-in-up" key={products._id}>
              <div className='image-card'>
              <div className='topMark'>#{products.productSerialNumber}</div>
                  
                  <img src={products.productImage}  alt='Main'/>
              </div>
              <div className='detail-card'>
              <div className='uper-details'>
              <div className='name'>{products.productModelNo}</div>
              <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {products.productRupees}/-</div>
              <div className='tags'>Watts :</div><div className='tags-details'>{products.productWatt}</div>
              <div className='tags'>Pol Dia :</div><div className='tags-details'>{products.productPolDia}</div>
             
              <div className='tags'>Dimensions :</div><div className='tags-details'> {products.productLength}mm by {products.productWidth}mm by {products.productHight}mm</div>
              </div>
              <button className='view-more'>View More</button>
              </div>
            </div>
            </Link>
        </>
    })
    } else {
        
      return this.state.cl.map(products  => {
        return <>
            <Link className='linkstyiling' style={{'color':'inherit' , 'textDecoration':'inherit'}} to={"/concealedlight/" + products._id} >
        <div className='card1' data-aos="zoom-in-up" key={products._id}>
              <div className='image-card'>
              <div className='topMark'>#{products.productSerialNumber}</div>
                  
                  <img src={products.productImage}  alt='Main'/>
              </div>
              <div className='detail-card'>
              <div className='uper-details'>
              <div className='name'>{products.productProductCode}</div>
              <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> {products.productRupees}/-</div>
              <div className='tags'>Watts :</div><div className='tags-details'>{products.productWatt}</div>
              <div className='tags'>Model :</div><div className='tags-details'>{products.productModel}</div>
             
              <div className='tags'>Dimensions :</div><div className='tags-details'> {products.productLength}mm by {products.productWidth}mm by {products.productHight}mm</div>
              </div>
          <button className='view-more'>View More</button>
              </div>
            </div>
            </Link> 
        </>
    })
    }}}
  

  render() {
  return (<>
 <div className='bestsellers'>
             <div className='brothereder' >
              {this.bgsList()}
            </div>
</div>
    
    </>
  )
}
}
export default Bestsellers;
