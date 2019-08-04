import React, { Component } from 'react';
import Layout from '../components/Layout'
import ReactPlayer from 'react-player'
import who from '../../static/img/qr-code.png'

class donate extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="content has-text-centered ">
                <h1 className="section-heading" style={{ marginBottom: '2em !important' }}>DONATE</h1>
                <p>As it is a student project, funding does not come easily. So we are asking you to please help us fund our film, so that we can raise awareness of an important topic that should never be hushed. Help us make our film so that we can show our viewers what it is that women experience on a daily. We want to show our viewers the behind-the-scenes of all the stories you see in the news. We want to show them these women - raw and honest. Help us to expose the truths that exist in this unjust society, so that we can attempt to right these wrongs, and encourage a higher, more-deserving level of respect for women everywhere. It's time things got equal.
Any amount will contribute so much, thank you in advance.
</p>
                <div style={{ backgroundColor: '#B8B8B8' }} className="tile">
                    <div class="column">
                      <img src={who} alt="" height="100px"/>
                      <h3>Bank:</h3>
                      <p>CA Picard Nedbank</p>
                      <h3>Account number:</h3>
                      <p> 1084339455</p>
                      <h3>BRANCH Code:</h3>
                      <p>167609</p>
                    </div>
                </div>            
                </div>
              </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default donate;