import React,{Component} from 'react';
import axios from "axios";
class FeedbackForm extends Component { 

    constructor(props){
        super();
        this.state = {
          Email:"",
          No:"",
          Description:""
         }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            'Email':this.state.Email,
            'No':this.state.No,
            'Description':this.state.Description
           }

        console.log(exercise);

        axios.post('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/feedback/add', exercise).then(res=>{alert(res.data.message)})
           
                   
    }
    
    render() { 
        return (
            <div><form className='form' onSubmit={this.onSubmit}>
            <div className='form-box'><label>Email :</label><br/><input
                            type={'email'} 
                            value={this.state.Email}
                            onChange={event=>this.setState({Email:event.target.value})}
                        /></div>
            <div className='form-box'><label>Phone Number :</label><br/><input
                            type={'type'} 
                            value={this.state.No}
                            onChange={event=>this.setState({No:event.target.value})}
                        /></div>
            <div className='form-box'><label>Description :</label><br/><textarea
                            type={'type'} 
                            value={this.state.Description}
                            onChange={event=>this.setState({Description:event.target.value})}
                        /></div>
            <button className='button-form' type='submit'>Submit</button>
            </form>
            </div>);
    }
}
 
export default FeedbackForm;