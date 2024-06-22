// import { useContext, useState } from 'react';
// import { VideoContext } from './components/contexts/videoContext';
import Timer from './components/timer/timer'
// import VideoPlayer from './components/videos/vid-player'
import VideoIndex from './components/videos/vid-index'
import VideoCommander from './components/videos/vid-command-center'
// import { Video, videoList } from './components/utils/vid-utils';


import './App.css'


function App() {
  // const currentVid = useContext(VideoContext)
  // Commented out after removing props from VidPlayer. 
  // May need to bring back after introducing context 

  // const defaultVideo: Video = {
  //   title: videoList[0].title,
  //   id: videoList[0].id
  // }

  // const [currentVid, setCurrentVid] = useState(defaultVideo)

  
  
  return (
    <>
      <Timer/>
      {/* <VideoContext.Provider value={currentVid}> */}
        {/* <VideoPlayer /> */}
        <VideoCommander/>
        <VideoIndex />
      {/* </VideoContext.Provider> */}
    </>
  )
}

export default App
