import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="tooltip inline-block relative">
      {children}
      <span className="tooltip-text absolute z-10 bg-white w-32 border border-pink rounded-sm p-1 text-xs text-pink font-main text-center">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
