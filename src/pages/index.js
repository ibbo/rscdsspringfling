import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import * as styles from "./index.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const HomePage = ({ data }) => {
  const {
    Header: title,
    Content: { data: { Content: contentData } },
    Banner,
  } = data.strapiHomepage

  const image = Banner.localFile.childImageSharp.gatsbyImageData;

  return (
    <Layout>
    <div className={styles.mainContainer}>
      <div className={styles.bannerContainer}>
        <GatsbyImage image={image} alt="" className={styles.bannerImage} />
        <h1 className={styles.bannerTitle}>{title}</h1>
      </div>
      <div className={styles.markdownContent}>
        <ReactMarkdown className={styles.pageText} children={contentData} />
      </div>
    </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    strapiHomepage {
      Header
      Content {
        data {
          Content
        }
      }
      Banner {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default HomePage
