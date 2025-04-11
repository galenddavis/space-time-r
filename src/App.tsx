import Timer from './components/timer/timer'
import VideoCommander from './components/videos/vid-command-center'
import PlanetCommander from './components/planets/planet-command-center'
import { Video, videoList } from './components/utils/vid-utils';
import VideoIndex from './components/videos/vid-index'
import { useEffect, useState } from 'react';
import './App.css'
import "./components/timer/timer.css"
import "./components/planets/planet-command.css"




function App() {

  // Initial video details
      const defaultVideo: Video = {
          title: videoList[0].title,
          id: videoList[0].id
      }

      // const [indexShown, setIndexShown] = useState<boolean>(false)
      const [currentVid, setCurrentVid] = useState<Video>(defaultVideo) 
      const [currentIdx, setCurrentIdx] = useState<number>(0)

      const [currentTimer, setCurrentTimer] = useState<"short" | "medium" | "long">("long") 
      

      useEffect(() => {
        setCurrentVid(videoList[currentIdx])
      }, [currentIdx])

  
  return (
    <div className="app-wrapper">
      <Timer timerDuration={currentTimer} setTimerDuration={setCurrentTimer} />
      <PlanetCommander timerDuration={currentTimer} />
      <VideoCommander currVideo={currentVid} currIdx={currentIdx} setCurrentIdx={setCurrentIdx}/>
      <VideoIndex setCurrentIdx={setCurrentIdx}/>
    </div>
  )
}

export default App
