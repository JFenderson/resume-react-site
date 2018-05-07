import React, { Component, Fragment } from 'react';
import styles from './contact.scss';
import * as baseService from '../../services/base';

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

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        baseService.post('/api/contact',{
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
        .then((res)=> {
            res.json(res)
        })
        .catch((err)=> {
            console.log(err)
        })
        console.log('sucess!')
    }

    render(){
        return(
            <div className={ styles.contactForm }>
                <h3 className={ styles.text }>Like what you saw? Send me an email and or connect via social media!</h3>
                <div onSubmit={ this.handleSubmit } className={ styles.form }>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={ this.state.name } onChange={ this.handleChange } required />
                
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } required />
                
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3" value={ this.state.message } onChange={ this.handleChange } required ></textarea>
                
                    <button onClick={ this.handleSubmit }>Submit</button>
                </div>
            </div>
        )
    }
}