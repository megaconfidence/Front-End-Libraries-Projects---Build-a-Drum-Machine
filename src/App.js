import React, { useEffect, useState } from 'react';
import './App.css';
import Display from './components/display';
import DrumPad from './components/drum-pad';
import VolumeSlider from './components/volume-slider';
import SwitchSet from './components/switch-set';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

function App() {
  const [clickKey, setClickKey] = useState('');
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [checked, setChecked] = useState(false);
  const [playBank, setPlayBank] = useState(bankOne);
  const mediaVolume = volume;

  const handlePlay = target => {
    if (target.childNodes[0].play) {
      target.childNodes[0].volume = mediaVolume;
      target.childNodes[0].currentTime = 0;
      target.childNodes[0].play();
    }

    setClickKey(target.id);
    setDisplay(
      target
        .getAttribute('data-id')
        .split('-')
        .join(' ')
    );
    setTimeout(() => {
      setClickKey('');
    }, 100);
  };

  const handleClick = e => {
    handlePlay(e.target);
  };

  const handKeyDown = e => {
    const drumPad = document.querySelector(`div#${e.code.split('Key')[1]}`);
    if (drumPad) {
      handlePlay(drumPad);
    }
  };

  const handleVolChange = e => {
    setVolume(e.target.value);
  };

  const handleSwitchChange = e => {
    setChecked(checked => !checked);
    console.log(checked);
    if (!checked) {
      setPlayBank(bankTwo);
    } else {
      setPlayBank(bankOne);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handKeyDown);
    return () => {
      window.removeEventListener('keydown', handKeyDown);
    };
  });

  return (
    <>
      <div className='title'>The React Drum Machine<a href="https://github.com/Confidence-Okoghenun/Front-End-Libraries-Projects---Build-a-Drum-Machine">(GitHub)</a></div>
      <div id='drum-machine'>
        <div className='pad-container'>
          {playBank.map(n => (
            <DrumPad
              clip={n}
              key={n.id}
              onClick={handleClick}
              clickKey={clickKey}
            />
          ))}
        </div>
        <div className='controls'>
          <VolumeSlider volume={volume} onChange={handleVolChange} />
          <Display display={display} />
          <div className='track'>
            <span>Track 1</span>
            <SwitchSet onChange={handleSwitchChange} checked={checked} />
            <span>Track 2</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
