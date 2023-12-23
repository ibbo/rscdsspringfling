import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import * as styles from "./index.module.css"
import Layout from "../components/Layout"

const HowToGetTherePage = ({ data }) => {
  const {
    Title: title,
    Description: { data: { Description: description } },
    Map,
  } = data.strapiHowToGetThere

  const image = Map.localFile.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <div>
        <h1 className={styles.h1}>{title}</h1>
        <GatsbyImage image={image} alt="" />
        <div className={styles.markdownContent}>
            <ReactMarkdown children={description} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HowToGetThereQuery {
    strapiHowToGetThere {
      Title
      Description {
        data {
          Description
        }
      }
      Map {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default HowToGetTherePage
