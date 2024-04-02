import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-white border-b border-[#e05b16]'
    : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-8 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
