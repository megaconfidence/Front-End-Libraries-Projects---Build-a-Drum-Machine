import React from 'react';

const VolumeSlider = ({volume, onChange}) => {
    return (
        <input type="range" step="0.01" min="0" max="1" onChange={onChange} value={volume}></input>
    )
}
export default VolumeSlider;