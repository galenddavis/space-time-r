import Timer from './components/timer/timer'
import VideoCommander from './components/videos/vid-command-center'
import './App.css'
import "./components/timer/timer.css"
// import { useContext, useState } from 'react';
// import { VideoContext } from './components/contexts/videoContext';
// import VideoPlayer from './components/videos/vid-player'
// import VideoIndex from './components/videos/vid-index'
// import { Video, videoList } from './components/utils/vid-utils';




function App() {

  
  return (
    <div className="app-wrapper">
      <Timer/>
      <VideoCommander/>
    </div>
  )
}

export default App
