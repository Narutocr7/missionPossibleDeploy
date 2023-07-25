import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import WarriorSection from "../components/Reusable/WarriorSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursecart from '../components/Cart/Coursecart'

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
    <WarriorSection
      // img = {image}
      title="I write code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <Coursecart courses={data.courses}/>
    <DualInfoblock heading="Our Team" />
  </Layout>
)

export const query = graphql`
  query {
      file(relativePath: { eq: "heromain.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    courses:allContentfulCourses{
      edges{
        node{
          id
          title
          price
          category
          description{
            description
          }
          image {
            url
          }
        }
      }
    }
  }
`

export default IndexPage

