import Timer from './components/timer/timer'
import VideoCommander from './components/videos/vid-command-center'
import './App.css'
import "./components/timer/timer.css"
import { Video, videoList } from './components/utils/vid-utils';
import VideoIndex from './components/videos/vid-index'
import { useEffect, useState } from 'react';
// import { useContext, useState } from 'react';
// import { VideoContext } from './components/contexts/videoContext';
// import VideoPlayer from './components/videos/vid-player'




function App() {

  // Initial video details
      const defaultVideo: Video = {
          title: videoList[0].title,
          id: videoList[0].id
      }

      // const [indexShown, setIndexShown] = useState<boolean>(false)
      const [currentVid, setCurrentVid] = useState<Video>(defaultVideo) 
      const [currentIdx, setCurrentIdx] = useState<number>(0)
      console.log("APP", currentVid)

      useEffect(() => {
        setCurrentVid(videoList[currentIdx])
      }, [currentIdx])

  
  return (
    <div className="app-wrapper">
      <Timer/>
      <VideoCommander currVideo={currentVid} currIdx={currentIdx} setCurrentIdx={setCurrentIdx}/>
      {/* <VideoIndex selectTrack={selectTrack} indexShown={indexShown} setIndexShown={setIndexShown}/> */}
      <VideoIndex setCurrentIdx={setCurrentIdx}/>
    </div>
  )
}

export default App
