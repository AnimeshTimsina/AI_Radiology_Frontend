import React from "react"
import './contact.styles.css'
import ContactForm from "../../components/contact-form/contact-form.component"
const ContactPage = () => (
    <div className="contact">
        <div className="contact-title">
            <h4>CONTACT</h4>
        </div>
        <div className="contact-subtitle">
            <span>For any query or feedbacks regarding the system, you can send us message using the form below</span>
        </div>
        <div className="contact-form-container">
            <ContactForm />
        </div>
    </div>
)

export default ContactPage