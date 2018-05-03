import React, { Component, Fragment } from 'react';
import styles from './skills.module.scss';

export default class ImageGallery extends Component{
    render(){
        return(
            <section id="skills">
            <div>
                <h3>Skills</h3>
                <p>View my skills to see if I'd be a good fit for your project's needs.</p>
            </div>
            
                <div className="skillsets">
                    <div className="skillSet">
                        <h3>Web</h3>
                        <ul>
                            <li className="skill">
                                <div className="skillName">HTML 5</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">CSS 3</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">JavaScript(ES6 and Beyond)</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">React</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Node.js</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Express.js</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Babel</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Webpack</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">npm</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">SASS</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Responsive Design</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Grid</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Passport.js</div>
                            </li>
                        </ul>
                    </div>
                    <div className="skillSet">
                        <h3>Tools</h3>
                        <ul>
                            <li className="skill">
                                <div className="skillName">Visual Studio Code</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Atom</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">Git</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">GitHub</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">AWS</div>
                            </li>
                            <li className="skill">
                                <div className="skillName">MySQL</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}