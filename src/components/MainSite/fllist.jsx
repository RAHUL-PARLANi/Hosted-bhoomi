import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
import AOS from 'aos'
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
      AOS.init({
        duration:1000
      })
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
        
        <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
        
        <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
        
        <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
        
        <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
        
        <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
    filterfl(value){
      const updatedList=this.state.products.filter((curElem)=>{
             return  curElem.productCategory ===  value;
      })
      console.log(updatedList);
      this.setState({bgs:updatedList})
      const json=JSON.stringify(updatedList)
      console.log(json);
      sessionStorage.setItem('fl',json);
  }
  filtercl(value){
    const updatedList=this.state.cl.filter((curElem)=>{
           return  curElem.productCategory ===  value;
    })
    console.log(updatedList);
    this.setState({bgs:updatedList})
    const json=JSON.stringify(updatedList)
    console.log(json);
    sessionStorage.setItem('cl',json);
}
filterpl(value){
  const updatedList=this.state.pl.filter((curElem)=>{
         return  curElem.productCategory ===  value;
  })
  console.log(updatedList);
  this.setState({bgs:updatedList})
  const json=JSON.stringify(updatedList)
  console.log(json);
  sessionStorage.setItem('pl',json);
}filtersl(value){
  const updatedList=this.state.sl.filter((curElem)=>{
         return  curElem.productCategory ===  value;
  })
  console.log(updatedList);
  this.setState({bgs:updatedList})
  const json=JSON.stringify(updatedList)
  console.log(json);
  sessionStorage.setItem('sl',json);
}filterwl(value){
  const updatedList=this.state.wl.filter((curElem)=>{
         return  curElem.productCategory ===  value;
  })
  console.log(updatedList);
  this.setState({bgs:updatedList})
  const json=JSON.stringify(updatedList)
  console.log(json);
  sessionStorage.setItem('wl',json);
}
 
  

  render() {
  return (<>
    <Navbar/>
    <div className='Listproducts'>
      <div className='productfilter'>
        <div className='Sorter' style={{'display':'flex'}}>
            <div  className='same tags'>SORT : </div>
            <div className='select' style={{'position':'absolute','color':'#7b283c'}}>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{openfilter()}} style={{'marginLeft':'0px','padding':'5px'}} className='same1 tags-details'>SELECT</div></div>
            <div id='filteroperner' style={{'display':'none'}}><div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div className='same1 tags-details'>BY A TO Z</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div className='same1 tags-details'>BY Z TO A</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div className='same1 tags-details'>BY PRICE</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div className='same1 tags-details'>BY MOST POPULAR</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div className='same1 tags-details'>BY LATEST</div>
            </div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{closefilter()}} className='same1 tags-details'>CLOSE</div>
            </div>
            </div></div>
        </div>
        <div className='Sorter' style={{'display':'flex'}}>
            <div  className='same tags'>FILTER : </div>
            <div className='select' style={{'position':'absolute','color':'black'}}>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{openfilter1()}} style={{'marginLeft':'0px','padding':'5px'}} className='same1 tags-details'>SELECT</div></div>
            <div id='filteroperner1' style={{'display':'none'}}>
            {this.props.category.map(element=>{
              return   <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div className='same1 tags-details'>{element}</div></div>
            })}
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{closefilter1()}} className='same1 tags-details'>CLOSE</div>
            </div>
            </div></div>
        </div>
        <button className='clearfilter'>CLEAR FILTER</button>
      </div>
      <div className='productsdisplay'>
            <div className='heading3'data-aos="fade-down" >{this.props.title}</div>
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
function openfilter(params) {
  document.getElementById('filteroperner').style.display='block'
}

function closefilter(params) {
  document.getElementById('filteroperner').style.display='none'
}
function openfilter1(params) {
  document.getElementById('filteroperner1').style.display='block'
}

function closefilter1(params) {
  document.getElementById('filteroperner1').style.display='none'
}
export default Fllist;
