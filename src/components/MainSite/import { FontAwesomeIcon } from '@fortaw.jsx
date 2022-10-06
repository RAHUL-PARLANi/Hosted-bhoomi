import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import axios from "axios";
import Navbar from './navbar';
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

export  class Flinfo extends Component {
    
        constructor(props){
        super();
        this.state = {
            data:[]    
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.invite=this.invite.bind(this);

}
    
    componentDidMount() {
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/fl/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    data:res.data
                }) 
            })
            .catch(function (error){
                console.log(error);
            })
           window.scrollTo(0,0)
        
    }
    
    open(){
        document.getElementById('id01').style.display='block';
        axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/fl/WTP/'+this.state.data._id)
            .then(res => console.log(res.data));

    }
    
    close(){
        document.getElementById('id01').style.display='none'
        window.location=window.location.href
    }
    
    invite(){
    window.open(
        "whatsapp://send?text=Hi,Your friend want you to see this great product :" + window.location.href,

        // This is what makes it 
        // open in a new window.
        '_blank' )
    }
    myfunction(smallimg){
        var fullImg=document.getElementById("1Id2");
        fullImg.src = smallimg;
     }
    
    render() { 
        return (
            <>
            <Navbar/>
            <div className='ProductView'>
            <div className='Upper-part'>
            <div className='Image-part'>
            <div className='Small-img'>
                <img className='mini-image' src='https://5.imimg.com/data5/AT/GP/MY-930421/t-5-led-tube-18-watts-500x500.jpg' width='100px' height='100px' alt='product1'/>
                <img className='mini-image' src='https://5.imimg.com/data5/LY/LK/MY-930421/slim-panel-lights-500x500.png' width='100px' height='100px' alt='side view of product1'/>
                <img className='mini-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINr8aHbDc6fdhS39dRX5PlJta_6INOTO7TZRY2_cqK2mUZn6sQroSNs4oJ4y-O0MNWSU&usqp=CAU' width='100px' height='100px' alt='side view of product1'/>
            </div>
            <div className='Main-img'>
            <img   src='https://5.imimg.com/data5/AT/GP/MY-930421/t-5-led-tube-18-watts-500x500.jpg' width='400px' height='400px' alt='product1'/>
            </div>
            </div>
            <div className='Detail-part'>
                <div className='main-points'>
                <div className='product-name'>FLOOD LIGHT BMI / FL- 30 (LNS)</div>
                <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />365</div>
                </div>
                <div className='Key-points'>
                    <div className="li"><div className='tags'>Material Used :</div> Aluminium</div>
                    <div className="li"><div className='tags'>Available :</div> Yes</div>
                    <div className="li"><div className='tags'>Likes :</div> 1 <FontAwesomeIcon icon="fa-solid fa-heart" /></div>
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
                 Bhoomi Lighting LED Floodlights not only ensure savings on initial capital, but also deliver a long-lasting performance. Versatile enough to be used in a variety of environments, our LED Flood Lights can be utilized well for lighting sports arenas, façades, general area lighting, billboards and other outdoor applications. When you choose LED floodlights from Bhoomi Lighting, you are selecting the world’s finest floodlighting luminaires.
                 </div>
                 </div>
                <div className='Information-tag'>Details</div>
                <div className='point-1'>
                    <div className='point-2'><div className='labels'> Watt</div><div className='label-content'>30W</div></div>
                    <div className='point-2'><div className='labels'> Weight</div><div className='label-content'>1100G</div></div>
                    <div className='point-2'><div className='labels'> Dimensions</div><div className='label-content'>140mm by 180 mm by 100mm</div></div>
                </div>
                <div className='point-1'>
                    <div className='point-2'><div className='labels'> Operating Voltage</div><div className='label-content'>100-440VAC</div></div>
                    <div className='point-2'><div className='labels'> IP Rating</div><div className='label-content'>IP 65</div></div>
                    <div className='point-2'><div className='labels'> Power Factor</div><div className='label-content'><FontAwesomeIcon icon="fa-solid fa-greater-than" />0.95</div></div>
                </div>
                <div className='point-1'>
                    <div className='point-2'><div className='labels'> CRI</div><div className='label-content'><FontAwesomeIcon icon="fa-solid fa-greater-than" />80</div></div>
                    <div className='point-2'><div className='labels'> Surge</div><div className='label-content'>6KV</div></div>
                    <div className='point-2'><div className='labels'> Colour Temperature</div><div className='label-content'>6000K / 3000k</div></div>
                </div>
               
             </div>
             <div className='Recommended-Products'>
             <div className='heading2'>RECOMMENDED PRODUCTS</div>
                
                <div className='products'>
                <div className='card1'>
                    
                        <div className='image-card'>
                            <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRP-55-_sjQxr_UU-7GoFTJ6AwZtYrF9T3XBTm_0iUvieivxClNeLDcjGJszPgslcYA3zuWmqyxrzBGLutiakkM8CPq73En9hUCXcQixba4muj4NqvL19UXQ&usqp=CAc'  alt='Main'/>
                        </div>
                        <div className='detail-card'>
                            <div className='uper-details'>
                        <div className='name'>BMI / FL- 30 (SHN)</div>
                        <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> 2199/-</div>
                        <div className='tags'>Watts :</div><div className='tags-details'> 30W</div>
                        <div className='tags'>Dimensions :</div><div className='tags-details'> 140mm by 180mm by 100mm</div>
                        </div>
                        <button className='view-more'>View More</button>
                        </div>
                        
                </div>
                <div className='card1'>
                    
                        <div className='image-card'>
                            <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRP-55-_sjQxr_UU-7GoFTJ6AwZtYrF9T3XBTm_0iUvieivxClNeLDcjGJszPgslcYA3zuWmqyxrzBGLutiakkM8CPq73En9hUCXcQixba4muj4NqvL19UXQ&usqp=CAc'  alt='Main'/>
                        </div>
                        <div className='detail-card'>
                            <div className='uper-details'>
                        <div className='name'>BMI / FL- 30 (SHN)</div>
                        <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> 2199/-</div>
                        <div className='tags'>Watts :</div><div className='tags-details'> 30W</div>
                        <div className='tags'>Dimensions :</div><div className='tags-details'> 140mm by 180mm by 100mm</div>
                        </div>
                        <button className='view-more'>View More</button>
                        </div>
                        
                </div>
                <div className='card1'>
                    
                        <div className='image-card'>
                            <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRP-55-_sjQxr_UU-7GoFTJ6AwZtYrF9T3XBTm_0iUvieivxClNeLDcjGJszPgslcYA3zuWmqyxrzBGLutiakkM8CPq73En9hUCXcQixba4muj4NqvL19UXQ&usqp=CAc'  alt='Main'/>
                        </div>
                        <div className='detail-card'>
                            <div className='uper-details'>
                        <div className='name'>BMI / FL- 30 (SHN)</div>
                        <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> 2199/-</div>
                        <div className='tags'>Watts :</div><div className='tags-details'> 30W</div>
                        <div className='tags'>Dimensions :</div><div className='tags-details'> 140mm by 180mm by 100mm</div>
                        </div>
                        <button className='view-more'>View More</button>
                        </div>
                        
                </div>
                <div className='card1'>
                    
                        <div className='image-card'>
                            <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRP-55-_sjQxr_UU-7GoFTJ6AwZtYrF9T3XBTm_0iUvieivxClNeLDcjGJszPgslcYA3zuWmqyxrzBGLutiakkM8CPq73En9hUCXcQixba4muj4NqvL19UXQ&usqp=CAc'  alt='Main'/>
                        </div>
                        <div className='detail-card'>
                            <div className='uper-details'>
                        <div className='name'>BMI / FL- 30 (SHN)</div>
                        <div className='product-price'><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> 2199/-</div>
                        <div className='tags'>Watts :</div><div className='tags-details'> 30W</div>
                        <div className='tags'>Dimensions :</div><div className='tags-details'> 140mm by 180mm by 100mm</div>
                        </div>
                        <button className='view-more'>View More</button>
                        </div>
                        
                </div>
                
                
                
                </div>
             </div>
            </div>
            <Footer/>
            </>
            )
         ;
         

    }
    
 }
 export default withRouter(Flinfo);