import React, { Component } from 'react';
import './app.css';


export default () => {

    return (
        <div>
        <header class="header-area header-sticky" style={{position: "sticky"}}>
            <div class="container">
                <div class="row">
                    <div class="col-12" style={{display: "flex"}}>
                    <nav class="main-nav" style={{flexDirection: "row", marginLeft: "15%", marginRight: "15%"}}>
                        
                        <a href="index.html" class="logo" style={{textAlign: 'left'}}>
                        <h4>Vote<span>Tracker</span></h4>
                        </a>
                        
                        <ul class="nav" style={{position: "absolute", right: "0", marginRight: "15%"}}>
                        <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                        <li class="scroll-to-section"><a href="#portfolio">Instructions</a></li>
                        <li class="scroll-to-section"><a href="about.html">About Us</a></li>
                        <li class="scroll-to-section"><div class="main-red-button"><a href="#contact">Contact Now</a></div></li> 
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        
                    </nav>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
  }