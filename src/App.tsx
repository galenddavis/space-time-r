import Timer from './components/timer/timer'
import VideoPlayer from './components/videos/vid-player-test'
import './App.css'

// export function addLibrary(libraryUrl) {
//   const script = document.createElement("script");
//   script.src = libraryUrl
//   script.async = true
//   document.body.appendChild(script)
// }

function App() {

  return (
    <>
      <Timer/>
      <VideoPlayer />
    </>
  )
}

export default App
