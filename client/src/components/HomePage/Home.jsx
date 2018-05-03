import React, { Component, Fragment } from 'react';
import styles from './home.module.scss';
import Profile from '../Profile/Profile';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Interests from '../Interests/Interests';
import Landing from '../LandingPage/Landing';
import Contact from '../Contact/Contact';

export default class Home extends Component{
    render(){
        return(
            <Fragment>
                <Landing />
                <Profile />
                <Experience />
                <Projects />
                <Skills />
                <Interests />
                <Contact />
            </Fragment>
        )
    }
}