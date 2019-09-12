import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import 'react-image-gallery/styles/css/image-gallery.css'
import Layout from '../components/Layout'
import ImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'

import who from '../../static/img/kr-web-images/img1_opt.jpg'
import who1 from '../../static/img/kr-web-images/other1_opt.jpg'

const images = [
  {
    original: who1,
    thumbnail: who1,
  },
  {
    original: who,
    thumbnail: who,
  }
]

export const IndexPageTemplate = ({  
}) => (
  <div>
    <div className="containerX">
       <ImageGallery 
          items={images} 
          showFullscreenButton={false}
          showThumbnails={false}
          showNav={true}
          showPlayButton={false} 
          sizes="(max-width: 30em) 50vw, (max-width: 1000px) 50vw, calc(33vw - 100px)" />
      <div className="randomo">
            <h1>Rose Productions</h1>
            <h6>I started Rose Productions so that I could put all the work I've done under one name, regarding script writing and film directing. </h6>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns has-text-centered">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content has-text-centered">
                    <h1 className="section-heading">ABOUT ME</h1>
                  <div className="tile">
                  <p className="section-content">I started Rose Productions so that I could put all the work I've done under one name, regarding script writing and film directing. I'm currently getting my degree in Film and Television at City Varsity, and I am in my last year. 
                      I completed one year of Film and Television at UCT, then transferred to City Varsity as I wanted to gain a more practical learning experience.  My greatest passion is directing, and I've always liked to write my own scripts because then I 
                      can envision the film as I am writing, making the directing process a lot smoother. I have had 7 years of training in the dramatic arts and have received my gold medal for grade 8 drama from the London Academy of Music and Dramatic Arts (LAMDA). 
                     </p>
                  </div>
                <a href="/about"><button className="button-class" to="/about">Read More</button></a>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="content has-text-centered ">
                    <h1 className="section-heading" style={{marginBottom: '2em !important'}}>FEATURED FILMS</h1>
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
                </div>
                <a href="/past-films"><button className="button-class has-text-centered">Read More</button></a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="content has-text-centered">
                    <h1 className="section-heading">CURRENT PROJECT</h1>
                  <div className="tile">
                  <p className="section-content">
                    I am currently in pre-production for my next film: Permanent. It is a 30-minute film and is our crew's graduate project of the year. 
                    Permanent is a film that creates awareness of sexual harassment. It aims to end victim-shaming and victim-blaming. It strives to give 
                    a voice to women everywhere who have been too afraid to turn the volume up, and let the world hear what they have to say...
                  </p>
                  </div>
                  <a href="/current-project"><button className="button-class">Read More</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{fontSize: '5px', textAlign: 'center'}}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
