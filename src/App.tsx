import Timer from './components/timer/timer'
import VideoPlayer from './components/videos/vid-player-test'
import { Video, Util } from "./components/utils/vid-utils"
import './App.css'


function App() {

  const defaultVideo: Video = {
    title: Util.videos[0].title,
    id: Util.videos[0].id
  }

  
  
  return (
    <>
      <Timer/>
      <VideoPlayer video ={defaultVideo} />
    </>
  )
}

export default App
