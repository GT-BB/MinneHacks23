import React, { Component } from 'react';
import './app.css';
import TeamImage from './media/hackgt.png';
import BannerLeft from './media/baner-dec-left.png';
import BannerRight from './media/baner-dec-right.png';

export default () => {

    return (
        <div>
          <div class="main-banner" id="top" style={{ paddingLeft: "50", paddingRight: "50", marginTop: "0%"}}>
            <div class="container">
              <div class="row">
                <div class="col-lg-12" style={{display: "flex"}}>
                  <div style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginRight: '10%'}}>
                    <div style={{width: "50%", padding: "2%"}}>
                      <div class="section-heading">
                        <h2>Team <em>____</em></h2><br/>
                        <p>We're a team of first year engineering students from Georgia Tech focused on improving civic engagement and participation in Minnesota and the nation as a whole.</p><br/>
                
                          <p>Our team was driven to create an application to improve the accessibility of voting and facilitate voting in local, state, and national elections through providing everyday citizens with real-time updates and infromation on polling site wait times.</p><br/>
                
                          <p>Using computer vision and React.js, ____ enables voters to plan ahead more effectively and ensure that they are able to exercise their civic power and fulfill their civic responsibilities.</p><br/>
                      </div>
                    </div>
                    <div style={{width: "50%", padding: "2%"}}>
                      <div class="right-image wow fadeInRight" >
                        <img src={TeamImage} alt="react" style={{ borderRadius: 20}} /> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }