import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import * as styles from "./index.module.css"
import Layout from "../components/Layout"

const PricingPage = ({ data }) => {
  const {
    Title: title,
    Description: { data: { Description: description } },
  } = data.strapiPricing

  return (
    <Layout>
    <div className={styles.accommodation}>
      <div className={styles.accommodationInfo}>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.markdownContent}>
            <ReactMarkdown className={styles.pageText} children={description} />
        </div>
      </div>
    </div>
    </Layout>
  );
}

export const query = graphql`
  query PricingQuery {
    strapiPricing {
      Title
      Description {
        data {
          Description
        }
      }
    }
  }
`

export default PricingPage
