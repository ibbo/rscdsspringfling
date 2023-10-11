import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";

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
  const classes = data.allStrapiDanceClass.edges;

  return (
    <Layout>
      <div className={styles.bannerContainer}>
        <h1>Dance Classes</h1>
      </div>
      <ul>
        {classes.map(danceClass => (
          <div>
          <GatsbyImage image={danceClass.node.Image[0].localFile.childImageSharp.gatsbyImageData} alt="" className={styles.bannerImage} />
          <li key={danceClass.node.id}>
            <h2>{danceClass.node.Title}</h2>
            <p>Teacher: {danceClass.node.Teacher}</p>
            <p>Musician: {danceClass.node.Musician}</p>
            <p>Time: {danceClass.node.Time}</p>
            <p>{danceClass.node.Description.data.Description}</p>
          </li>
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export default DanceClasses;
