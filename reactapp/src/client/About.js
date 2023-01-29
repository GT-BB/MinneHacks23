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
                        <h2>Team <em>billBoard</em></h2><br/>
                        <p>We are just a group of friends who wanted to have our HackGT project be one with an impact. We will tell you with first hand experience that the
                            floor of Georgia Tech's Klaus building is more comfortable than any bed ever (/s).</p><br/>
                
                          <p>From the beginning, our team was driven to create an application to improve the quality of life and accessibility of daily services. After researching issues 
                            experienced by vulnerable populations and minority groups in healthcare and medicine, we came to the realization that medical bill transparency is a major issue 
                            across the United States.</p><br/>
                
                          <p>billBoard creates a more equitable healthcare system, one bill at a time. billBoard increases transparency in medical costs by collecting and comparing data on the
                            most common medical procedures and their average pricing in different states across the country. The billBoard platform features data collection, analysis and verification, 
                            and comparison of medical bill data, contributed by our diverse user community. By analyzing and presenting this data, billBoard can be used to help users better understand 
                            their expected medical bill costs.</p><br/>
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