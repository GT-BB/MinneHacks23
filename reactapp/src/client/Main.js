import React, { Component } from 'react';
import './app.css';
import BannerImage from './media/banner-right-image.png';
import SearchAddress from './media/search-address.png';


export default () => {

    return (
        <div>
            <div class="main-banner" id="top" style={{ paddingLeft: "50", paddingRight: "50", marginTop: "0%"}}>
                <div class="container">
                <div class="row">
                    <div class="col-lg-12" style={{display: "flex"}}>
                    <div class="row" style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginRight: '10%'}}>
                        <div class="col-lg-6 align-self-center" style={{width: "60%", padding: "2%", alignContent: "center"}}>
                        <div class="left-content header-text">
                            <h2>Search your <em>voting location </em> &amp; track <span>wait times</span></h2>
                            <p>Vote Tracker is a Minnesota service that allows you to see approximate waiting times at your voting location in real time, helping you plan your trip to the polls.</p>
                            <h6><a rel="nofollow" href="https://pollfinder.sos.state.mn.us/" target="_blank">Find your voting address</a></h6>
                            <form id="search" action="#" method="GET">
                            <fieldset>
                                <input type="address" name="address" class="email" placeholder="Enter your voting location address..." autocomplete="on" required/>
                            </fieldset>
                            <fieldset>
                                <button type="submit" class="main-button">Search</button>
                            </fieldset>
                            </form>
                        </div>
                        </div>
                        <div class="col-lg-6" style={{width: "60%", padding: "2%", alignContent: "center"}}>
                        <div class="right-image ">
                            <img src={BannerImage} alt="team meeting"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div id="services" class="our-services section">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12  ">
                    <div class="section-heading">
                        <h2>The waiting time at <em>333 EAST RIVER PKWY</em> is approximately <span>35 minutes</span></h2>
                        <p>Space Dynamic HTML5 template is free to use for your website projects. However, you are not permitted to redistribute the template ZIP file on any CSS template collection websites. Please contact us for more information. Thank you for your kind cooperation.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                        <div class="first-bar progress-skill-bar">
                            <h4>Approximate Wait Time</h4>
                            <span>35 minutes</span>
                            <div class="filled-bar"></div>
                            <div class="full-bar"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div id="portfolio" class="our-portfolio section">
                <div class="container" style={{backgroundColor: '#E5E4EC', borderRadius: '40px', padding: '40px'}}>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                    <div class="section-heading ">
                        <h2>Instructions<br/><em>Voting Information </em></h2>
                        <h4>1. Find your voting/polling location</h4>
                        <p>Minnesota Polling Place Finder: <a href="https://pollfinder.sos.state.mn.us/" target="_blank">https://pollfinder.sos.state.mn.us/</a></p><br/><br/>

                        <h4>2. Copy the address of your voting location</h4>
                        <p>See the example image below</p>
                        <img src={SearchAddress} alt="" style={{borderRadius: '20px'}}/><br/><br/><br/>

                        <h4>3. Paste the address of your voting location in VoteTracker to see approximate wait times</h4>
                        <p>Vote Tracker will allow you to see approximate waiting times at your voting location in real time</p><br/><br/>

                        <h4>4. Plan your trip to the polls!</h4>
                        <p>Voting hours: <a href="https://www.sos.state.mn.us/elections-voting/election-day-voting/voting-hours/" target="_blank">https://www.sos.state.mn.us/elections-voting/election-day-voting/voting-hours/</a></p>
                        <p>What to bring: <a href="https://www.sos.state.mn.us/elections-voting/election-day-voting/do-i-need-to-bring-id/" target="_blank">https://www.sos.state.mn.us/elections-voting/election-day-voting/do-i-need-to-bring-id/</a></p>
                        
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
  }

  