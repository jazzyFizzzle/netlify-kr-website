import React, { Component } from 'react';
import Layout from '../components/Layout'
import ReactPlayer from 'react-player'

class pastFilms extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="content has-text-centered ">
                <h1 className="section-heading" style={{ marginBottom: '2em !important' }}>PAST FILMS</h1>
                <div style={{ backgroundColor: '#B8B8B8' }} className="tile">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      width='100%'
                      height='475px'
                      url='https://www.youtube.com/watch?v=C3SFN-knjMY&t=2s'
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                      }} />
                  </div>
                  <div class="column">
                    <h3>Title</h3>
                    <p>Wake Up, I'm Sleeping</p>
                    <h3>Description:</h3>
                    <p>A psychological horror short film that looks at a man haunted by insomnia</p>
                    <h3>Key Crew:</h3>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>
                        Produced by Celine Picard
                            </li>
                      <li>
                        Directed by Kayla Rose Gersohn
                            </li>
                      <li>
                        Written by Kayla Rose Gersohn &amp; Zachary Meltzer
                            </li>
                      <li>
                        Cinematography by Joshua Daniel Hubbard
                            </li>
                      <li>
                        Edited by  Zachary Lord-Rule
                            </li>
                      <li>
                        Sound Design by Robin Faull
                            </li>
                      <li>
                        Score by Sam Goldberg
                            </li>
                    </ul>
                  </div>
                </div>


                <br />
                <br />

                <div style={{ backgroundColor: '#B8B8B8' }} className="tile">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      width='100%'
                      height='595px'
                      url='https://www.youtube.com/watch?v=u1z7NxGobLo'
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                      }} />
                  </div>
                  <div class="column">
                    <h3>Title</h3>
                    <p>Continuity - Coriander Colin</p>
                    <h3>Description:</h3>
                    <p>First ever music video made for SA local band Coriander Colin.</p>
                    <h3>Key Crew:</h3>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>
                        Produced by Céline Picard
                            </li>
                      <li>
                        Concept by Kayla Rose Gersohn
                            </li>
                      <li>
                        Directed by Kayla Rose Gersohn
                            </li>
                      <li>
                        Filmed by Daniel Cole
                            </li>
                      <li>
                        Edited by Jité Kloppers
                            </li>
                      <li>
                        Recorded by Robin Faull, Leon Laubscher, and Concept Records
                            </li>
                      <li>
                        Mixed and Mastered by Concept Records
                            </li>
                      <li>
                        Makeup by Erin Carlisle and Ariella Sher
                            </li>
                    </ul>
                    <h3>SPECIAL THANKS TO VARSITY COLLEGE!</h3>
                  </div>
                </div>

                <br />
                <br />

                <div style={{ backgroundColor: '#B8B8B8' }} className="tile">
                  <div className="column">
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        width='100%'
                        height='675px'
                        url='https://www.youtube.com/watch?v=IrmQBBW0K1U'
                        config={{
                          youtube: {
                            playerVars: { showinfo: 1 }
                          }
                        }} />
                    </div>
                  </div>
                  <div class="column">
                    <h3>Title</h3>
                    <p>#drinkmasons</p>
                    <h3>Description:</h3>
                    <p>Original Mason’s premium, ready-to-drink alcoholic beverages combine quality local wine, real fruit and spring water into what we call the sparkling spritzer.</p>
                    <p>Our mixologists have sourced local South African wine, used real fresh fruit juice and other natural flavourants to create four delicious flavours ― each one made authentic with a unique and refreshing taste.</p>
                    <h3>Ad Creds:</h3>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>
                        Produced by Céline Picard
                            </li>
                      <li>
                        Concept by Kayla Rose Gersohn
                            </li>
                      <li>
                        Directed by Kayla Rose Gersohn
                            </li>
                      <li>
                        Filmed by Daniel Cole
                            </li>
                      <li>
                        Edited by Jité Kloppers
                            </li>
                      <li>
                        Recorded by Robin Faull, Leon Laubscher, and Concept Records
                            </li>
                      <li>
                        Mixed and Mastered by Concept Records
                            </li>
                      <li>
                        Makeup by Erin Carlisle and Ariella Sher
                            </li>
                    </ul>
                    <h3>SPECIAL THANKS TO VARSITY COLLEGE!</h3>
                  </div>
                </div>
                <a href="/"><button className="button-class">Go Back</button></a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default pastFilms;