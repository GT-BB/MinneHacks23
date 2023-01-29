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
<<<<<<< HEAD
                        <h2>Team <em>billBoard</em></h2><br/>
                        <p>We are just a group of friends who wanted to have our MinneHack project be one with an impact. We will tell you with first hand experience that the upper floors of Coffman Union are the best place to grind out some code.</p><br/>
                
                          <p>                     
                           From the beginning, our team was driven to create an application to further improve the quality of life and accessibility of daily services, and ultimately increase civic participation in Minnesota and the United States as a whole. In light of recent voting laws and restrictions across the nation, espescially in Atlanta, we came to the realization that the long and unpredicatable lines at the polls is main reason voters are discouraged from making the trip to the polls.

                           Every fall, hundreds of people line up outside polling locations on Election Day-- just to cast their ballot and have an opportunity to have their voice heard.

                            experienced by vulnerable populations and minority groups in healthcare and medicine, we came to the realization that medical bill transparency is a major issue 
                            across the United States.</p><br/>
                
                          <p>billBoard creates a more equitable healthcare system, one bill at a time. billBoard increases transparency in medical costs by collecting and comparing data on the
                            most common medical procedures and their average pricing in different states across the country. The billBoard platform features data collection, analysis and verification, 
                            and comparison of medical bill data, contributed by our diverse user community. By analyzing and presenting this data, billBoard can be used to help users better understand 
                            their expected medical bill costs.
                            
                            Team billBoard is made up of four engineering students who attend the Georgia Institute of Technology, and three of the members are proud to call Minnesota their home.
                            
                            </p><br/>
=======
                        <h2>Team <em>____</em></h2><br/>
                        <p>We're a team of first year engineering students from Georgia Tech focused on improving civic engagement and participation in Minnesota and the nation as a whole.</p><br/>
                
                          <p>Our team was driven to create an application to improve the accessibility of voting and facilitate voting in local, state, and national elections through providing everyday citizens with real-time updates and infromation on polling site wait times.</p><br/>
                
                          <p>Using computer vision and React.js, ____ enables voters to plan ahead more effectively and ensure that they are able to exercise their civic power and fulfill their civic responsibilities.</p><br/>
>>>>>>> e064db99b9a4b0695b2ff3f8735660a4a40fbb91
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