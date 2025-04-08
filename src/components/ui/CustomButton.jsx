import React from 'react';

const CustomButton = ({ children }) => {
  return (
    <div className="button-wrapper">
      <button>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default CustomButton;
