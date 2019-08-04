import React, { Component } from 'react';
import Layout from '../components/Layout'
import ReactPlayer from 'react-player'

class currentProject extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="content has-text-centered ">
                <h1 className="section-heading" style={{ marginBottom: '2em !important' }}>CURRENT PROJECT</h1>
                <div style={{ backgroundColor: '#B8B8B8' }} className="tile">
                    <div class="column">
                      <h3>Description:</h3>
                      <p>
                      I am currently in pre-production for my next film: Permanent. It is a 30-minute film and is our crew's graduate project of the year. 
Permanent is a film that creates awareness of sexual harassment. It aims to end victim-shaming and victim-blaming. It strives to give a voice to women everywhere who have been too afraid to turn the volume up, and let the world hear what they have to say. 
As it is a student project, funding does not come easily. So we are asking you to please help us fund our film, so that we can raise awareness of an important topic that should never be hushed. Help us make our film so that we can show our viewers what it is that women experience on a daily. We want to show our viewers the behind-the-scenes of all the stories you see in the news. We want to show them these women - raw and honest. Help us to expose the truths that exist in this unjust society, so that we can attempt to right these wrongs, and encourage a higher, more-deserving level of respect for women everywhere. It's time things got equal. 
Any amount will contribute so much, thank you in advance.

                      </p>
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

export default currentProject;