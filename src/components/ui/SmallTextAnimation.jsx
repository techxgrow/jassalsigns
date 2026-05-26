import React from "react";

const SmallTextAnimation = (props) => {
  const { text, textColor, fontSize } = props;

  return (
    <span
      className="small-text-animation"
      style={{ display: "inline-block", position: "relative" }}
    >
      <span
        className="animation-text"
        style={{
          fontSize: fontSize || "70px",
          fontWeight: "bold",
          color: "white",
          textTransform: "uppercase",
          display: "block",
          lineHeight: "1",
        }}
        data-text={text}
      >
        {text}
      </span>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .small-text-animation .animation-text::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: -2px;
            width: 0;
            overflow: hidden;
            font-weight: bold;
            font-size: ${fontSize || "70px"};
            background: ${textColor};
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: smallTextAnim 2s ease-out forwards;
            line-height: 1;
            white-space: nowrap;
          }
          
          @keyframes smallTextAnim {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
        `,
        }}
      />
    </span>
  );
};

export default SmallTextAnimation;
