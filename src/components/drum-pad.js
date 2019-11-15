import React from 'react';

const DrumPad = ({ clip, onClick, clickKey }) => {
  const { keyTrigger, url, id } = clip;

  return (
    <div
      className='drum-pad'
      style={{
        background: keyTrigger == clickKey ? 'black' : '',
        color: keyTrigger == clickKey ? 'white' : ''
      }}
      onClick={onClick}
      id={keyTrigger}
      data-id={id}
    >
      <audio className='clip' src={url} id={keyTrigger}></audio>
      <span>{keyTrigger}</span>
    </div>
  );
};
export default DrumPad;
