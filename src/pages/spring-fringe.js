import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import * as styles from "./index.module.css"
import Layout from "../components/Layout"

const SpringFringePage = ({ data }) => {
  const {
    Title: title,
    Description: { data: { Description: description } },
  } = data.strapiSpringFringe

  return (
    <Layout>
      <div>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.markdownContent}>
            <ReactMarkdown children={description} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query SpringFringeQuery {
    strapiSpringFringe {
      Title
      Description {
        data {
          Description
        }
      }
    }
  }
`

export default SpringFringePage


