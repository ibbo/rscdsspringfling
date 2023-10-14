import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./DanceCard.module.css" 

const DanceCard = ({ dance }) => {
  return (
    <div className={styles.card}>
      <GatsbyImage image={dance.Image.localFile.childImageSharp.gatsbyImageData} alt={dance.Title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{dance.Title}</h3>
        <p>Band: {dance.Band}</p>
        <p>Time: {dance.Time}</p>
        <p className={styles.cardDescription}>{dance.Description.data.Description}</p>
      </div>
    </div>
  )
}

export default DanceCard
