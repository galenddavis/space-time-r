import Timer from './components/timer/timer'
import VideoPlayer from './components/videos/vid-player'
import VideoIndex from './components/videos/vid-index'
// import { Video, videoList } from "./components/utils/vid-utils"


import './App.css'


function App() {

  // Commented out after removing props from VidPlayer. 
  // May need to bring back after introducing context 

  // const defaultVideo: Video = {
  //   title: videoList[0].title,
  //   id: videoList[0].id
  // }

  
  
  return (
    <>
      <Timer/>
      {/* <VideoPlayer video ={defaultVideo} /> */}
      <VideoPlayer />
      <VideoIndex />
    </>
  )
}

export default App
