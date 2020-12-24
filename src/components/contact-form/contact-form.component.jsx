import React from "react"
import "./contact-form.styles.css"
import {CustomButton} from "../custom-button/custom-button.component"
import axios from 'axios';
import {Spinner} from "react-bootstrap"

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

class ContactForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            phone:'',
            message:'',
            sending:false,
            sent:false,
            errors:{
                name:'',
                phone:'',
                email:'',
                msg:'',
            }
            
        }
    }

    onChange = event => {
        const {name,value} = event.target
        let errors = this.state.errors;
        switch(name) {
            case 'name':
                errors.name = value.length < 5 ?'Name must be minimum 5 characters long' : ''
                break
            case 'email':
                errors.email = value.length === 0 ? 'Email must not be empty' :  !validEmailRegex.test(value) ? 'Email is not valid' : ''
                break
            case 'phone':
                errors.phone = value.length < 15  ? '' : 'Phone number should not exceed 15 characters'
                break
            case 'message':
                errors.msg = value.length > 10 && value.length < 500 ? '' : 'Message must be 10 to 500 characters long'
                break
            default:
                break
        }

        this.setState({errors,
            [name]:value
        },()=>{console.log(errors)})

    }
    onFormSubmit = event => {
        event.preventDefault()
        if(!validateForm(this.state.errors)) {
            console.info('Invalid Form')
          }
        else{
            console.error('Valid Form')
            this.setState({
                sending:true
            })
            const to_send = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message
            }
           
            axios.post('http://localhost:8000/mail/send/', { to_send })
            .then(res => {  
                res.status === 200 && this.setState({
                    sending:false,
                    sent:true,
                })
                
          })
        }
    }

    render(){
        const {errors} = this.state;
        return(
            <div className="contact-form">

                { !this.state.sending && !this.state.sent ? 
                
                (
                    <div className="row input-container">
                        <div className="col col-xs-12">
                            <div className="styled-input wide">
                                <input name="name" type="text" onChange={this.onChange} required />                               
                                <label>Name</label> 
                                <span className='error'>{errors.name}</span>
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-12">
                            <div className="styled-input">
                                <input name="email" type="text" onChange={this.onChange} required />                               
                                <label>Email</label> 
                            </div>
                            <span className='error'>{errors.email}</span>
                        </div>
                        <div className="col col-md-6 col-sm-12">
                            <div className="styled-input" style={{float:'right'}}>
                                <input name="phone" type="text" onChange={this.onChange} />                               
                                <label>Phone Number (optional)</label> 
                            </div>
                            <span className='error'>{errors.phone}</span>
                        </div>
                        <div className="col col-xs-12">
                            <div className="styled-input wide">
                                <textarea name="message" onChange={this.onChange} required></textarea>                             
                                <label>Message</label>
                            </div>
                            <span className='error'>{errors.msg}</span>
                        </div>
                        <div className="col form-submit-button">
                            <div onClick={this.onFormSubmit}>
                            <CustomButton 
                            button_text={'Send Message'}
                            />
                            </div>
                        
                        </div>             
                    </div>
                 )
                  :
                
                    !this.state.sending && this.state.sent  ? <div className="success-msg">Your message has been sent successfully!</div>

                   :

                   (
                    <div className="spinner">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    </div>
                   )

                }

            
            </div>
        )
    }
}

export default ContactForm