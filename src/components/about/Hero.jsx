import React from 'react';
import CountUp from 'react-countup';
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

      <div className={styles.Container1}>
        <div className={styles.Section1}>
          <div className={styles.Con1}>
            <div className={styles.image11}>
              <img src="https://i.pinimg.com/736x/e0/bc/a8/e0bca82c38e4945ec120e5fee3315cf0.jpg" alt="Woodwork" />
            </div>
            <div className={styles.image12}>
              <img src="https://i.pinimg.com/736x/d4/84/06/d484069efc3205c3737ca95751e986a3.jpg" alt="Custom Design" />
            </div>
          </div>
          <div className={styles.Con2}>
            <div className={styles.line}>We Are Custom Woodworking</div>
            <div className={styles.Sentence}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae, accusantium adipisci voluptates doloribus repellendus omnis accusamus illum alias fuga inventore quae non cum! Odio, consectetur tempora.
            </div>
            <div className={styles.Button}>Learn More</div>
          </div>
        </div>
      </div>

      {/* Animated Counting Section */}
      <div className={styles.Con3}>
        <div className={styles.con4}>
          <div className={styles.No}>
            <CountUp start={0} end={30} duration={2.5} />+
          </div>
          <div className={styles.Count}>Years Experience</div>
        </div>

        <div className={styles.con4}>
          <div className={styles.No}>
            <CountUp start={0} end={150} duration={2.5} />+
          </div>
          <div className={styles.Count}>Projects Done</div>
        </div>

        <div className={styles.con4}>
          <div className={styles.No}>
            <CountUp start={0} end={100} duration={2.5} />+
          </div>
          <div className={styles.Count}>Happy Clients</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
