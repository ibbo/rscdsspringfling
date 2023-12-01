import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./DanceCard.module.css";
import { formatDateTime } from "../utils/utils";

const DanceCard = ({ dance }) => {

  return (
    <div className={styles.card}>
      <GatsbyImage image={dance.Image.localFile.childImageSharp.gatsbyImageData} alt={dance.Title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{dance.Title}</h3>
        <p>Band: {dance.Band}</p>
        <p>Time: {formatDateTime(dance.Time)}</p>
        <ReactMarkdown className={styles.cardDescription} children={dance.Description.data.Description} />
      </div>
    </div>
  )
}

export default DanceCard
