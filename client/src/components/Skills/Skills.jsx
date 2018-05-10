import React, { Component, Fragment } from 'react';
import * as animate from 'react-animations';
import styles from './skills.module.scss';
import IconBabel from 'react-devicon/babel/original';
import IconBootstrap from 'react-devicon/bootstrap/plain';
import IconCss3 from 'react-devicon/css3/plain';


export default class Skills extends Component{
    render(){
        return(
            <section id="skills">
            <div>
                <h3>Skills</h3>
                <p>View my skills to see if I'd be a good fit for your project's needs.</p>
            </div>
                <div className={styles.content}>
                    <div className={styles.skillSet}>
                        <h3>Web</h3>
                        <ul>
                            <li className={styles.skillLink}><a href="#"><IconBabel/></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>
                            <li className={styles.skillLink}><a href="#"></a></li>

                        </ul>
                        <ul>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>HTML 5</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>CSS 3</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>JavaScript(ES6 and Beyond)</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>React</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Node.js</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Express.js</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Babel</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Webpack</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>npm</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>SASS</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Responsive Design</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Grid</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Passport.js</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.skillSet}>
                        <h3>Tools</h3>
                        <ul>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Visual Studio Code</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Atom</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>Git</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>GitHub</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>AWS</p>
                            </li>
                            <li className={styles.grow}>
                                <p className={styles.bubble}>MySQL</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}