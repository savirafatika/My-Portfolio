import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'
import Scroll from "../components/scroll"

export default ({data}) => {
  const {
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs: { nodes: blogs },
  } = data

  return <Layout>
    <Scroll showBelow={250} />
    <SEO title="Home" description="this is our home page" />
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="featured projects" showLink />
    {/* <Blogs blogs={blogs} title="latest article" showLink /> */}
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        title
        description
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
