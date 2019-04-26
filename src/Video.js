import React from 'react'
import ReactPlayer from 'react-player'

function Video({}) {
  return (
    <ReactPlayer
      url="http://www.wowza.com/_h264/BigBuckBunny_115k.mov"
      playing
    />
  )
}

export default Video
