import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username} uwu`}</h1> : <h1>Loading.. please wait!</h1>}
        <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-6 align-self-center">
                    <div class="section-heading">
                      <h2>Team billBoard woo</h2>
                      <p> SAMPLE TEXT GO HERE WEEEE We are just a group of friends who wanted to have our HackGT project be one with an impact. We will tell you with first hand experience that the
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
                  <div class="col-lg-6">
                    <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                      <img src="assets\images\hackgt.jpg" alt="team meeting" style="border-radius: 20px;"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
