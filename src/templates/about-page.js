import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="content has-text-centered">
                <h1 className="section-heading">ABOUT ME</h1>
                  <div className="tile">
                    <p className="section-content">I started Rose Productions so that I could put all the work I've done under one name, regarding script writing and film directing. I'm currently getting my degree in Film and Television at City Varsity, and I am in my last year. 
                        I completed one year of Film and Television at UCT, then transferred to City Varsity as I wanted to gain a more practical learning experience.  My greatest passion is directing, and I've always liked to write my own scripts because then I 
                        can envision the film as I am writing, making the directing process a lot smoother. I have had 7 years of training in the dramatic arts and have received my gold medal for grade 8 drama from the London Academy of Music and Dramatic Arts (LAMDA). 
                      </p>
                  </div>
                  <a href="/"><button className="button-class">Go Back</button></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
