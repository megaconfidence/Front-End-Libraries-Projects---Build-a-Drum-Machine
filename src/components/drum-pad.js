import React from 'react';

const DrumPad = ({ clip, onClick, clickKey }) => {
  const { keyTrigger, url, id } = clip;
//   console.log(keyTrigger, clickKey.key, clickKey.style)
//   console.log(keyTrigger, clickKey.key,( keyTrigger == clickKey.key))
// ${keyTrigger == clickKey? 'drum-pad-clicked': ''}

  return (
    <div className='drum-pad' style={{background: keyTrigger == clickKey? 'black': ''}}  onClick={onClick} id={keyTrigger} data-id={id}>
      <audio className='clip' src={url} id={keyTrigger}></audio>
      {keyTrigger}
    </div>
  );
};
export default DrumPad;
