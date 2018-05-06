import React, { Component, Fragment } from 'react';
import styles from './contact.scss';

export default class ContactForm extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleNameChange(text){
        this.setState({
            name: text
        })
    }

    handleEmailChange(text){
        this.setState({
            email: text
        })
    }

    handleMessageChange(text){
        this.setState({
            message: text
        })
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    render(){
        return(
            <div className={styles.contactForm} onSubmit={this.handleSubmit}>
                <h3 className={styles.text}>Like what you saw? Send me an email and or connect via social media!</h3>
                <div onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} required />
                
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={this.state.value} onChange={this.handleChange} required />
                
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3" value={this.state.value} onChange={this.handleChange} required ></textarea>
                
                    <input type="submit" />
                </div>
            </div>
        )
    }
}