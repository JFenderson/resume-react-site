import React from 'react';

export default function ContactForm(){
    return(
        <div>
        <h3>Like what you saw? Send me an email and or connect via social media!</h3>
        <form method="POST" action="api/contact">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
        
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
        
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="10"></textarea>
        
            <input type="submit" />
      </form>
        </div>
    )
}