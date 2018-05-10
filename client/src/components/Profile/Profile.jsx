import React, { Component } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';
import styles from './profile.scss';


export default class Profile extends Component{
    render(){
        return(
            <div className={[styles.profileBody]}>
                <section className={styles.bio}>
                    <h1>Joseph Fenderson</h1>
                    <p>Fairfield, Al 35064</p>
                    <p>(205)396-7054</p>
                    <p>fenderson.joseph@gmail.com</p>

                </section>
                <div className="icons">
                    <a href="#"><FaIconPack.FaFacebook/></a>
                    <a href="#"><FaIconPack.FaGithub/></a>
                    <a href="#"><img src="./images/linkedin_circle.png" alt="linkedin-logo" width='50' height='50' /></a>
                </div>
            </div>
        )
    }
}