/*import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
import AOS from 'aos'
class Pllist extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        pl:[],
        }

    }
    componentDidMount() {
      AOS.init({
        duration:1000
      })
      axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/pl')
      .then(res => {
          
          this.setState({ pl: res.data })
          
      })
      .catch(error => console.log(error));
       window.scrollTo(0,0);
    }
    bgsList() {
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
export default Pllist;
*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import axios from "axios";
import Footer from './footer';
import AOS from 'aos'
class Pllist extends Component {
    
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
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/pl')
            .then(res => {
                
                this.setState({ products: res.data })
                
            })
            .catch(error => console.log(error));
    window.scrollTo(0,0);
    }
    bgsList() {
      if(sessionStorage.pl != null)
        {
        var obj = JSON.parse(sessionStorage.pl)
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
          <div className='tags'>Cut Out :</div><div className='tags-details'> {products.productCutOut}</div>
          <div className='tags'>Dimensions :</div><div className='tags-details'> {products.productLength}mm by {products.productWidth}mm by {products.productHight}mm</div>
          </div>
          <Link to={"/panellight/" + products._id} ><button className='view-more'>View More</button></Link>
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
        return <>      <div className='card1'  data-aos="zoom-in-up" key={products._id}>
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
      sessionStorage.setItem('pl',json);
  }
  clearfilter(){
    sessionStorage.removeItem('pl');
    window.location=window.location.href;
}
priceass(){
    if(sessionStorage.pl!=null){
        var obj = JSON.parse(sessionStorage.pl)
        console.log(obj);
        let sortedAsceding=obj.sort((a,b)=>{return a.productPrice-(b.productPrice)})
        const json=JSON.stringify(sortedAsceding)
        console.log(json);
        sessionStorage.setItem('pl',json);
        window.location=window.location.href;

    }else{
    let sortedAsceding=this.state.products.sort((a,b)=>{return a.productPrice-(b.productPrice)})
    const json=JSON.stringify(sortedAsceding)
    console.log(json);
    sessionStorage.setItem('pl',json);
    window.location=window.location.href;}
}

wattacc(){
  if(sessionStorage.pl!=null){
      var obj = JSON.parse(sessionStorage.pl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return a.productAvailable.localeCompare(b.productAvailable)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('pl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return a.productAvailable.localeCompare(b.productAvailable)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('pl',json);
  window.location=window.location.href;}
}
pricedec(){
  if(sessionStorage.pl!=null){
      var obj = JSON.parse(sessionStorage.pl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productRupees-(a.productRupees)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('pl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productRupees-(a.productRupees)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('pl',json);
  window.location=window.location.href;}
}
likes(){
  if(sessionStorage.pl!=null){
      var obj = JSON.parse(sessionStorage.pl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productWTP-(a.productWTP)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('pl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productWTP-(a.productWTP)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('pl',json);
  window.location=window.location.href;}
}
Name(){
  if(sessionStorage.pl!=null){
      var obj = JSON.parse(sessionStorage.pl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return a.productProductCode.localeCompare(b.productProductCode)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('pl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return a.productProductCode.localeCompare(b.productProductCode)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('pl',json);
  window.location=window.location.href;}
}

Namedec(){
  if(sessionStorage.pl!=null){
      var obj = JSON.parse(sessionStorage.pl)
      console.log(obj);
      let sortedAsceding=obj.sort((a,b)=>{return b.productProductCode.localeCompare(a.productProductCode)})
      const json=JSON.stringify(sortedAsceding)
      console.log(json);
      sessionStorage.setItem('pl',json);
      window.location=window.location.href;

  }else{
  let sortedAsceding=this.state.products.sort((a,b)=>{return b.productProductCode.localeCompare(a.productProductCode)})
  const json=JSON.stringify(sortedAsceding)
  console.log(json);
  sessionStorage.setItem('pl',json);
  window.location=window.location.href;}
}


  

  render() {
  return (<>
    <Navbar/>
    <div className='Listproducts'>
    <input id='Searchbox' placeholder='Search by name' onChange={(e)=>{
                    this.setState({
                        input:e.target.value
                    })
                }}/>
      <div className='productfilter'>
        <div className='Sorter' style={{'display':'flex'}}>
            <div  className='same tags'>SORT : </div>
            <div className='select' style={{'position':'absolute','color':'#7b283c'}}>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{openfilter()}} style={{'marginLeft':'0px','padding':'5px'}} className='same1 tags-details'>SELECT</div></div>
            <div id='filteroperner' style={{'display':'none'}}><div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{this.priceass()}} className='same1 tags-details'>BY PRICE LOW TO HIGH</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{this.pricedec()}} className='same1 tags-details'>BY PRICE HIGH TO LOW</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{this.wattacc()}} className='same1 tags-details'>BY AVAILANILITY STATUS</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{this.likes()}} className='same1 tags-details'>BY MOST POPULAR</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{this.Name()}} className='same1 tags-details'>BY A To Z</div></div>
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{this.Namedec()}} className='same1 tags-details'>BY Z To A</div></div>
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
              return   <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{this.filterfl(element)}} className='same1 tags-details'>{element}</div></div>
            })}
            <div style={{'color':'#7b283c','borderBottom':'2px solid #7b283c'}}><div onClick={()=>{closefilter1()}} className='same1 tags-details'>CLOSE</div>
            </div>
            </div></div>
        </div>
        <button className='clearfilter' onClick={()=>{this.clearfilter()}}>CLEAR FILTER</button>
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
export default Pllist;
