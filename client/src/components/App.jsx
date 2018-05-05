import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter } from 'react-router-dom';
import ReactRouter from 'react-router-dom';
import * as FaIconPack from 'react-icons/lib/fa';
import styles from './app.scss';
import Home from './HomePage/Home';
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Interests from './Interests/Interests';
import Landing from './LandingPage/Landing';
import Contact from './Contact/Contact';

export default class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrollingLock: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        if(window.scrollY > 100){
            this.setState({
                scrollingLock: true
            });
        }else if(window.scrollY < 100){
            this.setState({
                scrollingLock: false
            });
        }
    }


    render(){
        return(
            <Router>
                <Fragment>
                    <div className={styles.navbar}>
                        <Link to='/'><FaIconPack.FaHome/></Link>
                        <Link to='/profile'><FaIconPack.FaUser/></Link>
                        <Link to='/projects'><FaIconPack.FaBriefcase/></Link>
                        <Link to='/skills'><FaIconPack.FaList/></Link>
                        <Link to='/interests-and-goals'><FaIconPack.FaCheckSquareO/></Link>
                        <Link to='/education-and-experience'><FaIconPack.FaGraduationCap/></Link>
                        <Link to='contact'><FaIconPack.FaEnvelope/></Link>
                    </div>
                    <div>
                        <Route path='/' component={ Home } />
                        <Route path='/profile' component={ Profile } />
                        <Route path='/projects' component={ Projects } />
                        <Route path='/education-and-experience' component={ Experience } />
                        <Route path='/skills' component={ Skills } />
                        <Route path='/interests-and-goals' component={ Interests } />
                        <Route path='/contact' component={ Contact } />                        

                    </div>
                    
                </Fragment>
            </Router>
        )
    }
}