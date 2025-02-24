import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import CVFile from '../cv/savira_fatika.pdf' 
const About = ({
  data:{about:{nodes},
  },
}) => {
  const {info,stack,title,image} = nodes[0]

  return <Layout>
    <SEO title="About" description="about me" />
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item)=>{
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
          <a href={CVFile} className="btn btn-cv" target="blank"> Curriculum Vitae </a>
          {/* jika ingin flle langsung download tambahkan script properti "download" */}
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
{
  about:allStrapiAbout {
    nodes {
      stack {
        id
        title
      }
      title
      info
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

export default About
