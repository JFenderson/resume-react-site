import React, { Component, Fragment } from 'react';
import styles from './contact.scss';

export default class ContactForm extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

    }

    render(){
        return(
            <div>
                <h3 className={styles.text}>Like what you saw? Send me an email and or connect via social media!</h3>
                <div onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3"></textarea>
                
                    <input type="submit" />
                </div>
            </div>
        )
    }
}