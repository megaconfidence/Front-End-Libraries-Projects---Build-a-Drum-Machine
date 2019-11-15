import React from 'react';

const Display = ({ display }) => {
  const defaultText = (
    <span style={{ opacity: 0.3, fontSize: '0.8em' }}>
      Click on Key or Keyboard to begin
    </span>
  );
  return (
    <div id='display'>{display ? <span>{display}</span> : defaultText}</div>
  );
};
export default Display;
