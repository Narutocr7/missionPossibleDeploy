import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import WarriorSection from "../components/Reusable/WarriorSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
    <WarriorSection
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock heading="A message from CEO" />
    <Infoblock heading="About Vision"/>
    <Teamphotosection/>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

export default AboutPage
