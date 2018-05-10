import React, { Component } from 'react';
import styles from './experience.module.scss';

export default class Experience extends Component{
    render(){
        return(
            <div className={styles.content}>
                <h2>Education</h2>
                <div className={styles.innovate}>
                    <h4>Innovate Birmingham</h4>
                    <span>Certificate of Completion</span>
                    <span>Full-Stack Web Development</span>
                    <span className={styles.dates}>January 2018 - April 2018</span>  
                </div>
                <div className={styles.miles}>
                    <h4>Miles College</h4>
                    <span>Bachelor of Science Degree</span>
                    <span>Business Administration</span>
                    <span className={styles.dates}>August 2010 - May 2015</span> 
                </div>
                <div className={styles.relee}>
                    <h4>Robert E. Lee High School</h4>
                    <span>Advanced High School Diploma</span>
                    <span className={styles.dates}>August 2007 - May 2010</span>   
                </div>
            </div>
        )
    }
}