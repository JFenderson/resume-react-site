import React, { Component } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';
import styles from './profile.module.scss';


export default class Profile extends Component{
    render(){
        return(
            <div>
                <section className="bio">
                    <h1>Joseph Fenderson</h1>
                    <p>Full-stack web developer from Montgomery, Al</p>
                    <p>Recent graduate of the Innovate Birmingham: I Am Bham Cohort certified by UAB Collat School of Business and powered by Covalence</p>
                    <img src="./images/G46A9193.jpg" alt="profile-pic-joseph-fenderson" width='200' height='250'/>
                </section>
                <div className="info">
                    <h4>AGE</h4>
                    <h3>26</h3>
                    <h4>PHONE</h4>
                    <h3>205-396-7054</h3>
                    <h4>E-MAIL</h4>
                    <h3>fenderson.joseph@gmail.com</h3>
                </div>
                <div className="icons">
                    <a href="#"><img src="./images/facebook logo png transparent background.png" alt="facebook-logo" width='50' height='50'/></a>
                    <a href="#"><img src="./images/GitHub.png" alt="github-logo" width='50' height='50' /></a>
                    <a href="#"><img src="./images/linkdin.png" alt="linkedin-logo" width='50' height='50' /></a>
                </div>
                <a href="#"><button>Contact Me</button></a>
                <a href="#"><button>Learn More <FaIconPack.FaArrowDown/></button></a>
            </div>
        )
    }
}