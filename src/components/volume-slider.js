import React from 'react';

const VolumeSlider = ({ volume, onChange }) => {
  return (
    <div className='slide'>
      <input
        className='slider'
        type='range'
        step='0.01'
        min='0'
        max='1'
        onChange={onChange}
        value={volume}
      />
    </div>
  );
};
export default VolumeSlider;
