import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "./index.module.css";
import ClassCard from "../components/ClassCard";

export const query = graphql`
  query {
    allStrapiDanceClass {
      edges {
        node {
            id
            Title
            Teacher
            Musician
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


const DanceClasses = ({ data }) => {
  console.log(data);
  const classes = data.allStrapiDanceClass.edges;
  console.log(classes);
  return (
    <Layout>
      <div className={styles.bannerContainer}>
        <h1 className={styles.h1}>Dance Classes</h1>
      </div>
      <div className={styles.bannerImage}>
      </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {classes.map(danceClass => {
          console.log(danceClass);
          return <ClassCard key={danceClass.node.id} danceClass={danceClass.node} />;
        })}
        </div>
    </Layout>
  );
};

export default DanceClasses;
