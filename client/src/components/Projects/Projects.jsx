import React, { Component, Fragment } from 'react';

export default function Projects(){
    return(
        <div>
            <h1>Projects</h1>
            <p>These are the projects during my matriculation through the Innovate Birmingham course. I am currently developing projects as well.</p>
            <div className="projects">
                <div className="project">
                    <div className="card-header">Final Project – Family Function
                    </div> 
                    <div className="card-body">
                    <p>Website aimed towards connecting families without the help of social media.</p> 
                    <p>My Responsibilities</p>
                    <p>
                        My contribution to this project was setting up the Photo Gallery, User profile, database to hold the images (AWS S3 & MySQL), setting up the Node to connect with both the MySQL and S3 database.  
                    </p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS, JavaScript, React JS, Node JS, AWS(S3), MySQL </p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    DBLab- Blog Project
                    </div>
                    <div className="card-body">
                        <p>React based app to showcase message posting.</p>
                        <p>My Responsibilities</p>
                        <p>I created a server and client side of this react app using MySQL database, stripe payment system, a mailing system, a JavaScript compiler, node server routing and authentication</p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS, JavaScript, React JS, Node JS, MySQL, Passport JS, Stripe, Mailgun JS, Babel JS, Express JS</p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    Chirper
                    </div>
                    <div className="card-body">
                        <p>Create a front-end app using React.</p>
                        <p>My Responsibilities</p>
                        <p>I created a timeline setup where messages can be posted and display so that people would be able to see and edit their messages as well by using React JS.</p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS, JavaScript, React JS</p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    API-React
                    </div>
                    <div className="card-body">
                        <p>Create a app that display people and film from a web API.</p>
                        <p>My Responsibilities</p>
                        <p>I created the node server that will do a fetch request to the web API. By which I used the information to display a list of the information received (people and films) from the API.</p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS, JavaScript, React JS</p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    TypeWriter
                    </div>
                    <div className="card-body">
                        <p>Create a typing game using only jQuery.</p>
                        <p>My Responsibilities</p>
                        <p>This project included uses of loops and conditional statements and DOM Manipulation.
                        </p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS, JavaScript, JQuery </p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    Promise-Lab
                    </div>
                    <div className="card-body">
                        <p>Showcasing the use of Promises in asynchronous JavaScript</p>
                        <p>My Responsibilities</p>
                        <p></p>
                        <p>Technologies Used</p>
                        <p>HTML, JavaScript</p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    99-Lines
                    </div>
                    <div className="card-body">
                        <p>Creating the lyrics of a song while implementing JavaScript concept of loops and conditional statements such the ‘’for loop’’.</p>
                        <p>My Responsibilities</p>
                        <p></p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    DOM-DOM-DOM
                    </div>
                    <div className="card-body">
                        <p>Create squares when clicked and deleted when double-clicked using DOM manipulation in JavaScript </p>
                        <p>My Responsibilities</p>
                        <p></p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                </div>
                <div className="project">
                    <div className="card-header">
                    Resume
                    </div>
                    <div className="card-body">
                        <p>Creating a professional resume using HTML and CSS. This was the first project during class. </p>
                        <p>My Responsibilities</p>
                        <p></p>
                        <p>Technologies Used</p>
                        <p>HTML, CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}