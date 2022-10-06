import React,{Component} from 'react';
import axios from "axios";
import Navbar from './NavBarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class CreateWallLight extends Component { 

    constructor(props){
        super();
        this.state = {
           message:"",
            productProductCode:"",
            productType:"",
            productWatt:"",
            productLength:"",
            productWidth:"",
            productHight:"",
            productRupees:"",
            productOperatingVoltage:"",
            productColourAvailable:"",
            productIPRating:"",
            productPowerFactor:"",
            productCRI:"",
            productSurge:"",
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

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            productProductCode:this.state.productProductCode,
            productType:this.state.productTypee,
            productWatt:this.state.productWatt,
            productLength:this.state.productLength,
            productWidth:this.state.productWidth,
            productHight:this.state.productHight,
            productRupees:this.state.productRupees,
            productOperatingVoltage:this.state.productOperatingVoltage,
            productColourAvailable:this.state.productColourAvailable,
            productIPRating:this.state.productIPRating,
            productPowerFactor:this.state.productPowerFactor,
            productCRI:this.state.productCRI,
            productSurge:this.state.productSurge,
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

        axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/wl/add', exercise).then(res=>{this.setState({message:res})})
            this.setState({ 
                productProductCode:"",
            productType:"",
            productWatt:"",
            productLength:"",
            productWidth:"",
            productHight:"",
            productRupees:"",
            productOperatingVoltage:"",
            productColourAvailable:"",
            productIPRating:"",
            productPowerFactor:"",
            productCRI:"",
            productSurge:"",
            productCategory:"",
            productNote:"",
            productImage:"",
            productImage2:"",
            productImage3:"",
            productWTP:"",
            productHomepage:"",
            productSerialNumber:"",
            productAvailable:""

                })
            alert("Product Added!");
        
    }
    
    render() { 
        return (
            <div><Navbar/>
            <div className="admin-form-container">
                <div className='Title-homepage'>Add a Wall Light Product</div>
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
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> TYPE: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productWatt}
                            onChange={event=>this.setState({productWatt:event.target.value})}
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
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> LENGTH: </label>
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
                        <button type="submit" value="Add" className="Submit-Button"><FontAwesomeIcon icon="fa-solid fa-circle-plus" /> ADD</button>
                    </div>
                    
                </form>
                
            </div>
            </div>
         );
    }
}
 
export default CreateWallLight;