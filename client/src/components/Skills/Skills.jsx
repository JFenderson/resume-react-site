import React, { Component, Fragment } from 'react';
import * as animate from 'react-animations';
import styles from './skills.module.scss';
import * as FaIconPack from 'react-icons/lib/fa';
import * as IoIconPack from 'react-icons/lib/io';
import IconBabel from '-!react-svg-loader!../../utils/devicon-master/icons/babel/babel-original.svg';
import IconBootstrap from '-!react-svg-loader!../../utils/devicon-master/icons/bootstrap/bootstrap-plain.svg';
import IconAmazonwebservices from '-!react-svg-loader!../../utils/devicon-master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
import IconCss3 from '-!react-svg-loader!../../utils/devicon-master/icons/css3/css3-plain.svg';
import IconDevicon from '-!react-svg-loader!../../utils/devicon-master/icons/devicon/devicon-plain.svg';
import IconExpress from '-!react-svg-loader!../../utils/devicon-master/icons/express/express-original.svg';
import IconGit from '-!react-svg-loader!../../utils/devicon-master/icons/git/git-original.svg';
import IconGithub from '-!react-svg-loader!../../utils/devicon-master/icons/github/github-original.svg';
import IconHtml from '-!react-svg-loader!../../utils/devicon-master/icons/html5/html5-plain.svg';
import IconJs from '-!react-svg-loader!../../utils/devicon-master/icons/javascript/javascript-plain.svg'
import IconJQuery from '-!react-svg-loader!../../utils/devicon-master/icons/jquery/jquery-plain.svg';
import IconMysql from '-!react-svg-loader!../../utils/devicon-master/icons/mysql/mysql-plain.svg';
import IconNode from '-!react-svg-loader!../../utils/devicon-master/icons/nodejs/nodejs-plain.svg';
import IconReact from '-!react-svg-loader!../../utils/devicon-master/icons/react/react-original.svg';
import IconSass from '-!react-svg-loader!../../utils/devicon-master/icons/sass/sass-original.svg';
import IconVSCode from '-!react-svg-loader!../../utils/devicon-master/icons/visualstudio/visualstudio-plain.svg';
import IconWebpack from '-!react-svg-loader!../../utils/devicon-master/icons/webpack/webpack-plain.svg';

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
                        
                            <span className={[styles.grow,styles.skillLink]}><a href="#"><IconBabel width={50} height={50}/></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconHtml width={50} height={50}/></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconAmazonwebservices width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconBootstrap width={50} height={50}/></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconCss3 width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconExpress width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconGit width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconGithub width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconJQuery width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconJs width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconMysql width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconNode width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconReact width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconSass width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconVSCode width={50} height={50} /></a></span>
                            <span className={[styles.skillLink, styles.grow]}><a href="#"><IconWebpack width={50} height={50} /></a></span>

                        
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