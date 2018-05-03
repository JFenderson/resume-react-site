import React, { Component } from 'react';
import styles from './interests.module.scss';

export default class Interest extends Component{
    render(){
        return(
            <div>
                <h2>Interests and Future Goals</h2>
                <p>I am always ready to learn new thing and explore different opportunities</p>
                <h3>My Interests</h3>
                <ul>
                    <li><div>Cyber Security</div></li>
                    <li><div>Automation Programming</div></li>
                    <li><div>Machine Learning</div></li>
                    <li><div>Cloud Computing</div></li>
                    <li><div>UI/UX Programming</div></li>
                    <li><div></div></li>
                </ul>
                <h3>My Goals</h3>
                <ul>
                    <li>Learn C#</li>
                    <li>Contribute to an open-souce project</li>
                    <li>Establish a presence on StackOverflow</li>
                    <li>Help future students of Innovate Birmingham</li>
                    <li>Teach lower income neighborhoods about different ways to learn IT for free</li>
                    <li>Teach my children how to code</li>
                </ul>
            </div>
        )
    }
}