import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ImageGallery from 'react-image-gallery';

import who from '../../static/img/kr-web-images/img1.jpg'

const images = [
  {
    original: who,
    thumbnail: who,
  },
  {
    original: who,
    thumbnail: who,
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
          sizes="(max-width: 30em) 50vw, (max-width: 50em) 50vw, calc(33vw - 100px)" />
    </div>
    <div className="randomo">
          <h1>Rose Productions</h1>
          <h6>I started Rose Productions so that I could put all the work I've done under one name, regarding script writing and film directing. </h6>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content has-text-centered">
                    <h1 className="section-heading">ABOUT ME</h1>
                  <div className="tile">
                  <p>I started Rose Productions so that I could put all the work I've done under one name, regarding script writing and film directing. I'm currently getting my degree in Film and Television at City Varsity, and I am in my last year. I completed one year of Film and Television at UCT, then transferred to City Varsity as I wanted to gain a more practical learning experience.  My greatest passion is directing, and I've always liked to write my own scripts because then I can envision the film as I am writing, making the directing process a lot smoother. I have had 7 years of training in the dramatic arts and have received my gold medal for grade 8 drama from the London Academy of Music and Dramatic Arts (LAMDA). These years of acting experience have helped me immensely in my role as a director. I participated in the 48hour Film Festival in 2017 as the director for our team; and our film got nominated for 'Best Supporting Actress' and 'Best Original Soundtrack' (part of which I composed). 
I am eager to work on more music videos in the near future as I find they allow for great creative freedom. I will always continue to pursue my love for film by writing and directing short films and hopefully, one day, a feature-length film.  
</p>
                  </div>
                </div>
                <div className="content has-text-centered">
                    <h1 className="section-heading">FEATURED FILMS</h1>
                  <div className="tile">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
