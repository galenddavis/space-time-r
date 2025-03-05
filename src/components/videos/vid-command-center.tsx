import { useEffect, useState } from "react"
import { Video, videoList } from "../utils/vid-utils"
import VideoPlayer from "./vid-player"
// import VideoIndex from "./vid-index"
import "./vid-player.css"


interface VideoCommandProps {
    currVideo: Video,
    currIdx: number,
    setCurrentIdx: React.Dispatch<React.SetStateAction<number>>
}


const VideoCommander = ({currVideo, currIdx, setCurrentIdx}: VideoCommandProps) => {
    // Initial video details
    // const defaultVideo: Video = {
    //     title: videoList[0].title,
    //     id: videoList[0].id
    // }
    
    // const [currentVid, setCurrentVid] = useState<Video>(currVideo) 
    // console.log("VID COMMAND", currentVid)
    // const [currentIdx, setCurrentIdx] = useState<number>(currIdx)
    const [playing, setPlaying] = useState<boolean>(false)
    // const [indexShown, setIndexShown] = useState<boolean>(false)

    // Updates video source when video ID changes via any of the three below functions. (selectVideo, nextTrack, or prevTrack). Also controls the button animation state based on play state
    useEffect(() => {
        // setCurrentVid(videoList[currentIdx])
        const button = document.getElementsByClassName("playBtn")[0]
        if (!playing) {
            button.classList.remove("playing")
        } else {
            button.classList.add("playing")
        }
    }, [currIdx, playing])

    // const selectTrack = (video: Video) => {
    //     const selectedIdx = videoList.indexOf(video)
    //     setCurrentIdx(selectedIdx)
    //     setPlaying(true)
    // }

    const nextTrack = () => {
        let nextIdx = currIdx + 1
        if (nextIdx === videoList.length) {
            nextIdx = 0
        }
        setCurrentIdx(nextIdx)
    }

    const prevTrack = () => {
        let prevIdx = currIdx - 1
        if (prevIdx < 0) {
            prevIdx = videoList.length - 1
        }
        setCurrentIdx(prevIdx)
    }

    const pauseTrack = () => {
        setPlaying(!playing)
    }

    return (
        <div className="vid-control-wrapper">
            <VideoPlayer
                currVideo={currVideo}
                nextTrack={nextTrack}
                prevTrack={prevTrack}
                pauseTrack={pauseTrack}
                playing={playing}
                // indexShown={indexShown}
                // setIndexShown={setIndexShown}
                />
            {/* <VideoIndex
                indexShown={indexShown} 
                selectTrack={selectTrack}
            /> */}
        </div>
    )
}

export default VideoCommander;