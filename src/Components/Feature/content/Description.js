import React from "react";
import styles from "../Popup.module.css";

const Description = ({ children }) => {
  const description =
    "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen";
  return (
    <div className={styles.description}>
      <h4>Description</h4>
      <p>{children}</p>
    </div>
  );
};

export default Description;
