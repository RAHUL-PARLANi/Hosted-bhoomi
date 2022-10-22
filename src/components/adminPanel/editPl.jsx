import { useParams } from 'react-router-dom';
import React,{Component} from 'react';
import axios from "axios";
import Navbar from './NavBarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
 class EditPl extends React.Component { 

    constructor(props){
        super();
        this.state = {
           message:"",
           Image:'',
           Image2:'',
           Image3:'',
           
           productProductCode:"",
         productType:"",
         productWatt:"",
         productLength:"",
         productWidth:"",
         productHight:"",
         productCutOut:"",
         productRupees:"",
         productSurfaceRing:"",
         productOperatingVoltage:"",
         productIPRating:"",
         productPowerFactor:"",
         productCRI:"",
         productSurge:"",
         productColourTemp:"",
         productCategory:"",
         productNote:"",
         productImage:"",
         productImage2:"",
         productImage3:"",
         productWTP:"",
         productHomepage:"",
         productSerialNumber:"",
         productAvailable:""
}
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/pl/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    productProductCode:res.data.productProductCode,
                    productType:res.data.productType,
                    productWatt:res.data.productWatt,
                    productLength:res.data.productLength,
                    productWidth:res.data.productWidth,
                    productHight:res.data.productHight,
                    productCutOut:res.data.productCutOut,
                    productRupees:res.data.productRupees,
                    productSurfaceRing:res.data.productSurfaceRing,
                    productOperatingVoltage:res.data.productOperatingVoltage,
                    productIPRating:res.data.productIPRating,
                    productPowerFactor:res.data.productPowerFactor,
                    productCRI:res.data.productCRI,
                    productSurge:res.data.productSurge,
                    productColourTemp:res.data.productColourTemp,
                    productCategory:res.data.productCategory,
                    productNote:res.data.productNote,
                    productImage:res.data.productImage,
                    productImage2:res.data.productImage2,
                    productImage3:res.data.productImage3,
                    productWTP:res.data.productWTP,
                    productHomepage:res.data.productHomepage,
                    productSerialNumber:res.data.productSerialNumber,
                    productAvailable:res.data.productAvailable
            
                })
            })
            .catch(function (error){
                console.log(error);
            })

        
    }


    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            productProductCode:this.state.productProductCode,
            productType:this.state.productType,
            productWatt:this.state.productWatt,
            productLength:this.state.productLength,
            productWidth:this.state.productWidth,
            productHight:this.state.productHight,
            productCutOut:this.state.productCutOut,
            productRupees:this.state.productRupees,
            productSurfaceRing:this.state.productSurfaceRing,
            productOperatingVoltage:this.state.productOperatingVoltage,
            productIPRating:this.state.productIPRating,
            productPowerFactor:this.state.productPowerFactor,
            productCRI:this.state.productCRI,
            productSurge:this.state.productSurge,
            productColourTemp:this.state.productColourTemp,
            productCategory:this.state.productCategory,
            productNote:this.state.productNote,
            productImage:this.state.productImage,
            productImage2:this.state.productImage2,
            productImage3:this.state.productImage3,
            productWTP:this.state.productWTP,
            productHomepage:this.state.productHomepage,
            productSerialNumber:this.state.productSerialNumber,
            productAvailable:this.state.productAvailable
   }

        console.log(exercise);

        axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/pl/update/'+this.props.match.params.id, exercise).then(res=>{this.setState({message:res})})
                
            alert("Product Edited!");
        
    }
    uploadImage(){
        console.log('I am hit');
        const data = new FormData()
        data.append("file", this.state.Image)
        data.append("upload_preset", "bhoomi")
        data.append("cloud_name","defonzszt")
        fetch("https://api.cloudinary.com/v1_1/defonzszt/image/upload",{
        method:"post",
        body:data
        })
        .then(resp => resp.json())
        .then(data => {
        console.log(data.url)
        this.setState({productImage:data.url})
        })
        .catch(err => console.log(err))
    }
    uploadImage2(){
        console.log('I am hit');
        const data = new FormData()
        data.append("file", this.state.Image2)
        data.append("upload_preset", "bhoomi")
        data.append("cloud_name","defonzszt")
        fetch("https://api.cloudinary.com/v1_1/defonzszt/image/upload",{
        method:"post",
        body:data
        })
        .then(resp => resp.json())
        .then(data => {
        console.log(data.url)
        this.setState({productImage2:data.url})
        })
        .catch(err => console.log(err))
    }
    uploadImage3(){
        console.log('I am hit');
        const data = new FormData()
        data.append("file", this.state.Image3)
        data.append("upload_preset", "bhoomi")
        data.append("cloud_name","defonzszt")
        fetch("https://api.cloudinary.com/v1_1/defonzszt/image/upload",{
        method:"post",
        body:data
        })
        .then(resp => resp.json())
        .then(data => {
        console.log(data.url)
        this.setState({productImage3:data.url})
        })
        .catch(err => console.log(err))
    }
    
    
    render() { 
        return (
            <div><Navbar/>
            <div className="admin-form-container">
                <div className='Title-homepage'>Edit a Paneled Light Product</div>
                <div className='admin-imagechoosing'>
                Main Image
                <input  type="file" onChange= {(e)=> this.setState({Image:e.target.files[0]})}></input>
                <button onClick={()=>{this.uploadImage()}}>Save</button>
                Side Image 1
                <input  type="file" onChange= {(e)=> this.setState({Image2:e.target.files[0]})}></input>
                <button  onClick={()=>{this.uploadImage2()}}>Save</button>
                Side Image 2
                <input  type="file" onChange= {(e)=> this.setState({Image3:e.target.files[0]})}></input>
                <button onClick={()=>{this.uploadImage3()}}>Save</button>
                </div>
              
                <form onSubmit={this.onSubmit}>
                    <div className='not-main-form'>
                    <div className='form-left-half'>
                    <div className="admin-form-box">
                        <label className="admin-form-label" ><FontAwesomeIcon icon="fa-solid fa-play" /> PRODUCT CODE:</label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productProductCode}
                            onChange={event=>this.setState({productProductCode:event.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label className="admin-form-label" ><FontAwesomeIcon icon="fa-solid fa-play" /> TYPE:</label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productType}
                            onChange={event=>this.setState({productType:event.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> WATT: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productWatt}
                            onChange={event=>this.setState({productWatt:event.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> MAIN IMAGE: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productImage}
                            onChange={event=>this.setState({productImage:event.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> DESCRIPTION: </label>
                        <textarea
                            type="text" 
                            className="admin-form-input" 
                            value={this.state.productNote}
                            onChange={event=>this.setState({productNote:event.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> LENGHT: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productLength}
                            onChange={e=>this.setState({productLength:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> WIDTH: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productWidth}
                            onChange={e=>this.setState({productWidth:e.target.value})}
                        />
                    </div>
                    
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> HIGHT: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productHight}
                            onChange={e=>this.setState({productHight:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> CUT OUT: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productCutOut}
                            onChange={e=>this.setState({productCutOut:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> SURFACE RING: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productSurfaceRing}
                            onChange={e=>this.setState({productSurfaceRing:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> RUPEES: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productRupees}
                            onChange={e=>this.setState({productRupees:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> OPERATING VOLTAGE: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productOperatingVoltage}
                            onChange={e=>this.setState({productOperatingVoltage:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> IP RATING: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productIPRating}
                            onChange={e=>this.setState({productIPRating:e.target.value})}
                        />
                    </div>
                    </div>
                    <div className='form-right-half'>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> POWER FACTOR: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productPowerFactor}
                            onChange={e=>this.setState({productPowerFactor:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> CRI: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productCRI}
                            onChange={e=>this.setState({productCRI:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> SURGE: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productSurge}
                            onChange={e=>this.setState({productSurge:e.target.value})}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> COLOUR TEMPERATURE: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productColourTemp}
                            onChange={e=>{this.setState({productColourTemp:e.target.value})}}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> CATEGORY: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productCategory}
                            onChange={e=>{this.setState({productCategory:e.target.value})}}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> IMAGE 2: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productImage2}
                            onChange={e=>{this.setState({productImage2:e.target.value})}}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> IMAGE 3: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productImage3}
                            onChange={e=>{this.setState({productImage3:e.target.value})}}
                        />
                    </div>
                    
                    <div className="admin-form-box">
                    <label><FontAwesomeIcon icon="fa-solid fa-play" /> HOMEPAGE: </label>
                        <select
                            type="text" 
                            className="admin-form-input"
                            
                            value={this.state.productHomepage}
                            onChange={e=>{this.setState({productHomepage:e.target.value})}}
                        >   <option value="">choose</option>
                            <option value="on">on</option>
                            <option value="off">off</option>
                        </select>
                    
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> HOMEPAGE ORDER NUMBER: </label>
                        <input
                            type="Number" 
                            className="admin-form-input"
                            value={this.state.productSerialNumber}
                            onChange={e=>{this.setState({productSerialNumber:e.target.value})}}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> NUMBER OF LIKES: </label>
                        <input
                            type="Number" 
                            className="admin-form-input"
                            value={this.state.productWTP}
                            onChange={e=>{this.setState({productWTP:e.target.value})}}
                        />
                    </div>
                    <div className="admin-form-box">
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> AVAILABILITY: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productAvailable}
                            onChange={e=>{this.setState({productAvailable:e.target.value})}}
                        />
                    </div>
                    </div>
                    </div>
                    <div className='admin-form-box' >
                        <button type="submit" value="Add" className="Submit-Button"><FontAwesomeIcon icon="fa-solid fa-circle-plus" /> EDIT</button>
                    </div>
                    
                </form>
                
            </div>
            </div>
         );}
}
 
export default withRouter(EditPl);