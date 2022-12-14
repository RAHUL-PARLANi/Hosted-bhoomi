import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
import AOS from 'aos'
import banner from "./../../images/Screenshot (289).png"
class Fllist extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        products:[],
        input:''
        }

    }
    componentDidMount() {
      AOS.init({
        duration:1000
      })
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/fl')
            .then(res => {
                
                this.setState({ products: res.data })
                
            })
            .catch(error => console.log(error));
    window.scrollTo(0,0);
    }
    bgsList() {
      if(sessionStorage.fl != null)
        {
        var obj = JSON.parse(sessionStorage.fl)
        console.log(obj);
        return obj.filter((curElem)=>{
          if(this.state.input === ''){
              return this.state.products
          }
          else if(curElem.productModelNo.toLowerCase().includes(this.state.input.toLowerCase()))
          { 
              return curElem;
          }
      }).map(products  => {
          return <> <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
    }else{
      return this.state.products.filter((curElem)=>{
        if(this.state.input === ''){
            return this.state.products
        }
        else if(curElem.productModelNo.toLowerCase().includes(this.state.input.toLowerCase()))
        { 
            return curElem;
        }
    }).map(products  => {
        return <> <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
    })}
    }
    filterfl(value){
      
      const updatedList=this.state.products.filter((curElem)=>{
             return  curElem.productCategory ===  value;
      })
      console.log(updatedList);
      this.setState({products:updatedList})
      const json=JSON.stringify(updatedList)
      console.log(json);
      sessionStorage.setItem('fl',json);
  }
  clearfilter(){
    sessionStorage.removeItem('fl');
    window.location=window.location.href;
}
priceass(){
    if(sessionStorage.fL!=null){
        var obj = JSON.parse(sessionStorage.fl)
        console.log(obj);
        let sortedAsceding=obj.sort((a,b)=>{return a.productRupees-(b.productRupees)})
        const json=JSON.stringify(sortedAsceding)
        console.log(json);
        sessionStorage.setItem('fl',json);
        window.location=window.location.href;

    }else{
    let sortedAsceding=this.state.products.sort((a,b)=>{return a.productRupees-(b.productRupees)})
    const json=JSON.stringify(sortedAsceding)
    console.log(json);
    sessionStorage.setItem('fl',json);
    window.location=window.location.href;}
}

wattacc(){
  if(sessionStorage.fL!=null){
      var obj = JSON.parse(sessionStorage.fl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return a.productAvailable.localeCompare(b.productAvailable)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('fl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return a.productAvailable.localeCompare(b.productAvailable)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('fl',json);
  window.location=window.location.href;}
}
pricedec(){
  if(sessionStorage.fL!=null){
      var obj = JSON.parse(sessionStorage.fl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productRupees-(a.productRupees)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('fl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productRupees-(a.productRupees)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('fl',json);
  window.location=window.location.href;}
}
likes(){
  if(sessionStorage.fL!=null){
      var obj = JSON.parse(sessionStorage.fl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productWTP-(a.productWTP)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('fl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productWTP-(a.productWTP)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('fl',json);
  window.location=window.location.href;}
}
Name(){
  if(sessionStorage.fL!=null){
      var obj = JSON.parse(sessionStorage.fl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return a.productModelNo.localeCompare(b.productModelNo)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('fl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return a.productModelNo.localeCompare(b.productModelNo)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('fl',json);
  window.location=window.location.href;}
}

Namedec(){
  if(sessionStorage.fL!=null){
      var obj = JSON.parse(sessionStorage.fl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productModelNo.localeCompare(a.productModelNo)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('fl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productModelNo.localeCompare(a.productModelNo)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('fl',json);
  window.location=window.location.href;}
}


  

  render() {
  return (<>
  <Helmet>
    <title>
      FLOOD LIGHTS COLLECTION - BHOOMI E & D TRADING COMPANY
    </title>
    <meta
       name="description"
       content="Bhoomi E & D Trading Company Flood Lights Collection"
     />
  </Helmet>
    <Navbar/>
    <div className='Listproducts'>
    <img src={banner} height={'400px'}/>
    <div className='productfilter'>
        <div className='Sorter' style={{'display':'flex'}}>
            <div  className='same tags'>SORT : </div>
            <div className='select' style={{'position':'absolute','color':'#d92126'}}>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{openfilter()}} style={{'marginLeft':'0px','padding':'5px'}} className='same1 tags-details'>SELECT</div></div>
            <div id='filteroperner' style={{'display':'none'}}><div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{this.priceass()}} className='same1 tags-details'>BY PRICE LOW TO HIGH</div></div>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{this.pricedec()}} className='same1 tags-details'>BY PRICE HIGH TO LOW</div></div>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{this.wattacc()}} className='same1 tags-details'>BY AVAILANILITY STATUS</div></div>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{this.likes()}} className='same1 tags-details'>BY MOST POPULAR</div></div>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{this.Name()}} className='same1 tags-details'>BY A To Z</div></div>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{this.Namedec()}} className='same1 tags-details'>BY Z To A</div></div>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{closefilter()}} className='same1 tags-details'>CLOSE</div>
            </div>
            </div></div>
        </div>
        <div className='Sorter' style={{'display':'flex'}}>
            <div  className='same tags'>FILTER : </div>
            <div className='select' style={{'position':'absolute','color':'black'}}>
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{openfilter1()}} style={{'marginLeft':'0px','padding':'5px'}} className='same1 tags-details'>SELECT</div></div>
            <div id='filteroperner1' style={{'display':'none'}}>
            {this.props.category.map(element=>{
              return   <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{this.filterfl(element)}} className='same1 tags-details'>{element}</div></div>
            })}
            <div style={{'color':'#d92126','borderBottom':'2px solid #d92126'}}><div onClick={()=>{closefilter1()}} className='same1 tags-details'>CLOSE</div>
            </div>
            </div></div>
        </div>
        <button className='clearfilter' onClick={()=>{this.clearfilter()}}>CLEAR FILTER</button>
      </div>
      <input id='Searchbox' placeholder='Search by name' onChange={(e)=>{
                    this.setState({
                        input:e.target.value
                    })
                }}/>
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
