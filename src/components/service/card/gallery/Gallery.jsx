import React from "react";
import styles from "./Gallery.module.css";
import GalleryData from "../../../datafile/GalleryData";
function Gallery() {
  return (
    <div className={styles.Gallery}>
      <div className={styles.Container}>
        <div className={styles.Name}>OUR GALLERY</div>
        <div className={styles.Line}>
          Capitalise on low-hanging fruit to identify a ballpark value-added activity to beta test.
          <br />
          Override the digital divide with additional clickthrough from DevOps.
        </div>

        {/* Gallery Section */}
        <div className={styles.Box1}>
          {GalleryData.galleryImages.map((item) => (
            <div key={item.id} className={styles.image}>
              <img src={item.imageUrl} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.Section1}>
        <div className={styles.Box}>
          <div className={styles.Number}>Have a question? Call us now at +123 456 7890 or</div>
          <div className={styles.button}>Contact us</div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
