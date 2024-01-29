import React from 'react';
import { Link } from 'react-router-dom';
// import myImage from 'client/src/image/Avatar.jpg';

export default function Layout(){
    return (
        <>
            <h1>My Portfolio</h1> 
            <img src="logo.png" alt="MyLogo"></img>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/service">Service</Link> | 
                <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
            </nav>
                <br/>
        </>
    )
}