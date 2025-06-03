import React from 'react';
import styles from "../../styles/SmallTextAnimation.module.css";

const SmallTextAnimation = (props) => {
  const { text, textColor, fontSize } = props;

  return (
    <div
      className={styles.page}
      style={{
        "--font-size": fontSize,
        "--text-gradient": textColor, // for gradient input
      }}
    >
      <h1 className={`${styles.text} `} data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default SmallTextAnimation;
