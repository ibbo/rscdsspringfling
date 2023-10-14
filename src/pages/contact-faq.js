import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import * as styles from "./index.module.css"
import Layout from "../components/Layout"

const ContactFAQPage = ({ data }) => {
  const {
    Title: title,
    Description: { data: { Description: description } },
  } = data.strapiContactFaq

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
  query ContactFaqQuery {
    strapiContactFaq {
      Title
      Description {
        data {
          Description
        }
      }
    }
  }
`

export default ContactFAQPage
