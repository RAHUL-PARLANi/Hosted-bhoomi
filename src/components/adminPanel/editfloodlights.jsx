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
 class DetailsPage extends React.Component { 

    constructor(props){
        super();
        this.state = {
           message:"",
           productModelNo:"",
           productWatt:"",
           productWeight:"",
           productLength:"",
           productWidth:"",
           productHight:"",
           productRupees:"",
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
        axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/fl/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                   productModelNo:res.data.productModelNo,
                   productWatt:res.data.productWatt,
                   productWeight:res.data.productWeight,
                   productLength:res.data.productLength,
                   productWidth:res.data.productWidth,
                   productHight:res.data.productHight,
                   productRupees:res.data.productRupees,
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
           productModelNo:this.state.productModelNo,
           productWatt:this.state.productWatt,
           productWeight:this.state.productWeight,
           productLength:this.state.productLength,
           productWidth:this.state.productWidth,
           productHight:this.state.productHight,
           productRupees:this.state.productRupees,
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

        axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/fl/update/'+this.props.match.params.id, exercise).then(res=>{this.setState({message:res})})
                
            alert("Product Edited!");
        
    }
    
    render() { 
        return (
            <div><Navbar/>
            <div className="admin-form-container">
                <div className='Title-homepage'>Edit this Flood Light</div>
                <form onSubmit={this.onSubmit}>
                    <div className='not-main-form'>
                    <div className='form-left-half'>
                    <div className="admin-form-box">
                        <label className="admin-form-label" ><FontAwesomeIcon icon="fa-solid fa-play" /> MODEL NO.</label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productModelNo}
                            onChange={event=>this.setState({productModelNo:event.target.value})}
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
                        <label><FontAwesomeIcon icon="fa-solid fa-play" /> WEIGHT: </label>
                        <input
                            type="text" 
                            className="admin-form-input"
                            value={this.state.productWeight}
                            onChange={e=>this.setState({productWeight:e.target.value})}
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
                        <button type="submit" value="Add" className="Submit-Button" ><FontAwesomeIcon icon="fa-solid fa-pen" /> EDIT</button>
                    </div>
                    
                </form>
                
            </div>
            </div>
         );
    }
}
 
export default withRouter(DetailsPage);