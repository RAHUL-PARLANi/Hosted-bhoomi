import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
class Fllist extends Component {
    
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
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/sl')
      .then(res => {
          
          this.setState({ sl: res.data })
          
      })
      .catch(error => console.log(error));

      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl')
      .then(res => {
          
          this.setState({ cl: res.data })
          
      })
      .catch(error => console.log(error));
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/wl')
      .then(res => {
          
          this.setState({ wl: res.data })
          
      })
      .catch(error => console.log(error));
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/pl')
      .then(res => {
          
          this.setState({ pl: res.data })
          
      })
      .catch(error => console.log(error));

        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/fl')
            .then(res => {
                
                this.setState({ products: res.data })
                
            })
            .catch(error => console.log(error));
    window.scrollTo(0,0);
    }
    bgsList() {
    {
      if(this.props.title==='FLOOD LIGHTS'){
          
      return this.state.products.map(products  => {
        return <>
        
        <div className='card1' key={products._id}>
            <div className='image-card'>
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
            <Link to={"/floodlight/" + products._id} ><button className='view-more'>View More</button></Link>
            </div>
            </div>
          
        </>
    })
    }
    else if(this.props.title==='PANEL LIGHTS'){
        
      return this.state.pl.map(products  => {
        return <>
        
        <div className='card1' key={products._id}>
              <div className='image-card'>
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
              <Link to={"/panellight/" + products._id} ><button className='view-more'>View More</button></Link>
              </div>
            </div>
          
        </>
    })
    }else if(this.props.title==='WALL LIGHTS'){
        
      return this.state.wl.map(products  => {
        return <>
        
        <div className='card1' key={products._id}>
              <div className='image-card'>
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
              <Link to={"/walllight/" + products._id} ><button className='view-more'>View More</button></Link>
              </div>
            </div>
          
        </>
    })
    }else if(this.props.title==='STREET LIGHTS'){
        
      return this.state.sl.map(products  => {
        return <>
        
        <div className='card1' key={products._id}>
              <div className='image-card'>
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
              <Link to={"/streetlight/" + products._id} ><button className='view-more'>View More</button></Link>
              </div>
            </div>
          
        </>
    })
    } else {
        
      return this.state.cl.map(products  => {
        return <>
        
        <div className='card1' key={products._id}>
              <div className='image-card'>
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
              <Link to={"/concealedlight/" + products._id} ><button className='view-more'>View More</button></Link>
              </div>
            </div>
          
        </>
    })
    }}}
  

  render() {
  return (<>
    <Navbar/>
    <div className='Listproducts'>
      <div className='productfilter'>
        <div className='Sorter' style={{'display':'flex'}}>
            <div className='same tags'>SORT : </div>
            <select className='select' style={{'color':'black'}}>
            <option style={{'color':'black'}}><div className='same1 tags-details'>SELECT</div></option>
            <option style={{'color':'black'}}><div className='same1 tags-details'>BY A TO Z</div></option>
            <option style={{'color':'black'}}><div className='same1 tags-details'>BY Z TO A</div></option>
            <option style={{'color':'black'}}><div className='same1 tags-details'>BY PRICE</div></option>
            <option style={{'color':'black'}}><div className='same1 tags-details'>BY MOST POPULAR</div></option>
            <option style={{'color':'black'}}><div className='same1 tags-details'>BY LATEST</div></option>
            </select>
        </div>
        <div className='Filter' style={{'display':'flex'}}>
            <div className="same tags option">CATEGORY : </div>
            <select className='select' style={{'color':'black'}}>
            {this.props.category.map(element=>{
              return   <option  style={{'color':'black'}}><div className='same1  tags-details'>{element}</div></option>
            })}</select>
          </div>
          <button className='clearfilter'>CLEAR FILTER</button>
      </div>
      <div className='productsdisplay'>
            <div className='heading3' >{this.props.title}</div>
            <div className='all-p'>
            {this.bgsList()}
            </div>
            </div>
    </div>
    <Footer/>
    </>
  )
}
}
export default Fllist;
