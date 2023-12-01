import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./ClassCard.module.css";
import { formatDateTime } from "../utils/utils";

const ClassCard = ({ danceClass }) => {

  return (
    <div className={styles.card}>
      {
        danceClass.Image && danceClass.Image[0] &&
          (<GatsbyImage 
                image={danceClass.Image[0].localFile.childImageSharp.gatsbyImageData}
                alt={danceClass.Title}
                className={styles.cardImage}
            />
          )
      }
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{danceClass.Title}</h3>
        <p>Teacher: {danceClass.Teacher}</p>
        <p>Musician: {danceClass.Musician}</p>
        <p>Time: {formatDateTime(danceClass.Time)}</p>
        <ReactMarkdown className={styles.cardDescription} children={danceClass.Description.data.Description} />
      </div>
    </div>
  )
}

export default ClassCard

