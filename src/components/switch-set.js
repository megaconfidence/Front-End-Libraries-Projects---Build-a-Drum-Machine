import React from 'react';

const SwitchSet = ({onChange, checked}) => {
  return (
      <label className="switch">
        <input type="checkbox"  onChange={onChange} checked={checked}/>
        <span className="slider"></span>
      </label>
  );
};
export default SwitchSet;
