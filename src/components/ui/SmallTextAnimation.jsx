import React from 'react';

const SmallTextAnimation = (props) => {
  const { text, textColor, fontSize } = props;

  return (
    <div className="small-text-animation" style={{ display: 'inline-block' }}>
      <h1 
        style={{
          position: 'relative',
          fontSize: fontSize || '70px',
          fontWeight: 'bold',
          color: 'white',
        }}
        data-text={text}
      >
        {text}
      </h1>
      <style dangerouslySetInnerHTML={{
        __html: `
          .small-text-animation h1::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: -2px;
            width: 0;
            overflow: hidden;
            font-weight: bold;
            font-size: ${fontSize || '70px'};
            background: ${textColor};
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: smallTextAnim 4s linear infinite;
          }
          
          @keyframes smallTextAnim {
            50%, 80% {
              width: 100%;
            }
          }
        `
      }} />
    </div>
  );
};

export default SmallTextAnimation;
