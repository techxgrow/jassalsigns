import React from 'react';
import "../../styles/SmallTextAnimation.css";

const SmallTextAnimation = (props) => {
  const { text, textColor, fontSize } = props;

  return (
   <div
  className="page"
  style={{
    "--font-size": fontSize,
    "--text-gradient": textColor, // for gradient input
  }}
>
  <h1 className="text page__text " data-text={text}>
    {text}
  </h1>
</div>
  );
};

export default SmallTextAnimation;
