import React, { Component, Fragment } from 'react';
import styles from './landing.scss';

export default class Landing extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <section className={styles.hero}>
                <h1><span>Landing Page</span></h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod, illo eaque facilis accusamus at et officiis nulla ver</h2>
            </section>
        )
    }
}