import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import DanceCard from "../components/DanceCard";
import * as styles from "./index.module.css";

export const query = graphql`
  query {
    allStrapiDance {
      edges {
        node {
            id
            Title
            Band
            Time
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
    }
  }
`;


const EveningDances = ({ data }) => {
  const classes = data.allStrapiDance.edges;

  return (
    <Layout>
      <div>
        <div className={styles.bannerContainer}>
          <h1 className={styles.h1}>Evening Dances</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {classes.map(danceClass => (
            <DanceCard key={danceClass.node.id} dance={danceClass.node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EveningDances;

