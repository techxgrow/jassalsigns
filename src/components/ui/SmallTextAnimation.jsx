import React from 'react';

const SmallTextAnimation = (props) => {
  const { text, textColor, fontSize, fontWeight } = props;

  return (
    <div className="small-text-animation" style={{ display: 'inline-block', position: 'relative' }}>
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontSize: fontSize || '70px',
          fontWeight: fontWeight || 'bold',
          color: 'white',
          lineHeight: '1',
          textTransform: 'uppercase',
          position: 'relative',
        }}
      >
        {text}
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '0%',
            height: '100%',
            overflow: 'hidden',
            background: textColor,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            whiteSpace: 'nowrap',
            animation: 'smallTextAnim 2s ease-out forwards',
          }}
        >
          {text}
        </span>
      </h1>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes smallTextAnim {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `
      }} />
    </div>
  );
};

export default SmallTextAnimation;
