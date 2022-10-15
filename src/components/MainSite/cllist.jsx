/*import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
import AOS from 'aos'
class Cllist extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        cl:[]
      }

    }
    componentDidMount() {
      AOS.init({
        duration:1000
      })
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl')
      .then(res => {
          
          this.setState({ cl: res.data })
          
      })
      .catch(error => console.log(error));
    window.scrollTo(0,0);
    }
    bgsList() {
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
export default Cllist;
*//*import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
import AOS from 'aos'
class SLlist extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        sl:[],
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

    window.scrollTo(0,0);
    }
    bgsList() {
      return this.state.sl.map(products  => {
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
              <div className='tags'>Pol Dia :</div><div className='tags-details'>{products.productPolDia}</div>
             
              <div className='tags'>Dimensions :</div><div className='tags-details'> {products.productLength}mm by {products.productWidth}mm by {products.productHight}mm</div>
              </div>
              <Link to={"/streetlight/" + products._id} ><button className='view-more'>View More</button></Link>
              </div>
            </div>
          
        </>
    })
     }
    filtersl(value){
  const updatedList=this.state.sl.filter((curElem)=>{
         return  curElem.productCategory ===  value;
  })
  console.log(updatedList);
  this.setState({bgs:updatedList})
  const json=JSON.stringify(updatedList)
  console.log(json);
  sessionStorage.setItem('cl',json);
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
export default SLlist;
*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
import AOS from 'aos'
class CLlist extends Component {
    
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
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl')
            .then(res => {
                
                this.setState({ products: res.data })
                
            })
            .catch(error => console.log(error));
    window.scrollTo(0,0);
    }
    bgsList() {
      if(sessionStorage.cl != null)
        {
        var obj = JSON.parse(sessionStorage.cl)
        console.log(obj);
        return obj.filter((curElem)=>{
          if(this.state.input === ''){
              return this.state.products
          }
          else if(curElem.productProductCode.toLowerCase().includes(this.state.input.toLowerCase()))
          { 
              return curElem;
          }
      }).map(products  => {
          return <>     <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
    }else{
      return this.state.products.filter((curElem)=>{
        if(this.state.input === ''){
            return this.state.products
        }
        else if(curElem.productProductCode.toLowerCase().includes(this.state.input.toLowerCase()))
        { 
            return curElem;
        }
    }).map(products  => {
        return <>        <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
      sessionStorage.setItem('cl',json);
  }
  clearfilter(){
    sessionStorage.removeItem('cl');
    window.location=window.location.href;
}
priceass(){
    if(sessionStorage.cl!=null){
        var obj = JSON.parse(sessionStorage.cl)
        console.log(obj);
        let sortedAsceding=obj.sort((a,b)=>{return a.productRupees-(b.productRupees)})
        const json=JSON.stringify(sortedAsceding)
        console.log(json);
        sessionStorage.setItem('cl',json);
        window.location=window.location.href;

    }else{
    let sortedAsceding=this.state.products.sort((a,b)=>{return a.productRupees-(b.productRupees)})
    const json=JSON.stringify(sortedAsceding)
    console.log(json);
    sessionStorage.setItem('cl',json);
    window.location=window.location.href;}
}

wattacc(){
  if(sessionStorage.cl!=null){
      var obj = JSON.parse(sessionStorage.cl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return a.productAvailable.localeCompare(b.productAvailable)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('cl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return a.productAvailable.localeCompare(b.productAvailable)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('cl',json);
  window.location=window.location.href;}
}
pricedec(){
  if(sessionStorage.cl!=null){
      var obj = JSON.parse(sessionStorage.cl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productRupees-(a.productRupees)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('cl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productRupees-(a.productRupees)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('cl',json);
  window.location=window.location.href;}
}
likes(){
  if(sessionStorage.cl!=null){
      var obj = JSON.parse(sessionStorage.cl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productWTP-(a.productWTP)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('cl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productWTP-(a.productWTP)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('cl',json);
  window.location=window.location.href;}
}
Name(){
  if(sessionStorage.cl!=null){
      var obj = JSON.parse(sessionStorage.cl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return a.productProductCode.localeCompare(b.productProductCode)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('cl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return a.productProductCode.localeCompare(b.productProductCode)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('cl',json);
  window.location=window.location.href;}
}

Namedec(){
  if(sessionStorage.cl!=null){
      var obj = JSON.parse(sessionStorage.cl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productProductCode.localeCompare(a.productProductCode)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('cl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productProductCode.localeCompare(a.productProductCode)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('cl',json);
  window.location=window.location.href;}
}


  

  render() {
  return (<>
    <Helmet>
      <title>
      CONCEALED LIGHTS COLLECTION - BHOOMI E & D TRADING COMPANY
      </title>
      <meta
     name="description"
     content="BHOOMI E & D TRADING COMPANY Concealed Lights Collection
     "
   />
    </Helmet>
    <Navbar/>
    <div className='Listproducts'>
   
      <div className='productfilter'>
        <div className='Sorter' style={{'display':'flex'}}>
            <div  className='same tags'>SORT : </div>
            <div className='select' style={{'position':'absolute','color':'rgb(246, 155, 10)'}}>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{openfilter()}} style={{'marginLeft':'0px','padding':'5px'}} className='same1 tags-details'>SELECT</div></div>
            <div id='filteroperner' style={{'display':'none'}}><div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{this.priceass()}} className='same1 tags-details'>BY PRICE LOW TO HIGH</div></div>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{this.pricedec()}} className='same1 tags-details'>BY PRICE HIGH TO LOW</div></div>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{this.wattacc()}} className='same1 tags-details'>BY AVAILANILITY STATUS</div></div>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{this.likes()}} className='same1 tags-details'>BY MOST POPULAR</div></div>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{this.Name()}} className='same1 tags-details'>BY A To Z</div></div>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{this.Namedec()}} className='same1 tags-details'>BY Z To A</div></div>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{closefilter()}} className='same1 tags-details'>CLOSE</div>
            </div>
            </div></div>
        </div>
        <div className='Sorter' style={{'display':'flex'}}>
            <div  className='same tags'>FILTER : </div>
            <div className='select' style={{'position':'absolute','color':'black'}}>
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{openfilter1()}} style={{'marginLeft':'0px','padding':'5px'}} className='same1 tags-details'>SELECT</div></div>
            <div id='filteroperner1' style={{'display':'none'}}>
            {this.props.category.map(element=>{
              return   <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{this.filterfl(element)}} className='same1 tags-details'>{element}</div></div>
            })}
            <div style={{'color':'rgb(246, 155, 10)','borderBottom':'2px solid rgb(246, 155, 10)'}}><div onClick={()=>{closefilter1()}} className='same1 tags-details'>CLOSE</div>
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
export default CLlist;
