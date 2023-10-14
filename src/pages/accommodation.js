import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import * as styles from "./index.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const AccommodationPage = ({ data }) => {
  const {
    Title: title,
    Description: { data: { Description: description } },
    Image,
  } = data.strapiAccommodation

  const image = Image.localFile.childImageSharp.gatsbyImageData;

  return (
    <Layout>
    <div className={styles.accommodation}>
      <div className={styles.accommodationInfo}>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.markdownContent}>
            <ReactMarkdown className={styles.pageText} children={description} />
        </div>
      </div>
      <GatsbyImage image={image} alt="" className={styles.accommodationImage} />
    </div>
    </Layout>
  );
}

export const query = graphql`
  query AccommodationQuery {
    strapiAccommodation {
      Title
      Description {
        data {
          Description
        }
      }
      Image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default AccommodationPage