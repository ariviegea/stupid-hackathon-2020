import React from 'react'
import Sound from 'react-sound'
// import roostersound from '../../assets/rooster.mp3'
import chickensound from '../../assets/chicken-sounds-longer.mp3'

const ChickenSound = () => {
  return (
    <Sound
    url={chickensound}
    playStatus={Sound.status.PLAYING}
    autoLoad={true}
    volume={100} 
    // loop={true}
    />
   );
}

export default ChickenSound;