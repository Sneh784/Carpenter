import React from 'react';
import styles from "./Hero.module.css";
import AboutData from '../datafile/AboutData'; // Import data correctly

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Container}>
        <div className={styles.Section}>
          <div className={styles.Line}>{AboutData.line}</div>

          {AboutData.sections.map((section, index) => (
            <div key={index} className={styles[`Box${index + 1}`]}>
              <div className={styles[`box${index + 1}`]}>
                <div className={styles.Name}>{section.title}</div>
                <div className={styles.Sent}>{section.description}</div>
                <div className={styles.button}>Learn more</div>
              </div>
              <div className={styles[`image${index + 1}`]}>
                <img src={section.image} alt={section.title} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Hero;
