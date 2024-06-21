import { createContext, useContext } from "react";
import { Video, videoList } from "../utils/vid-utils"

const defaultVideo: Video = {
    title: videoList[0].title,
    id: videoList[0].id
}

export const VideoContext = createContext<Video | undefined>(defaultVideo)


// Checks to ensure VideoContext is not undefined. Throws error if so.  
// eslint-disable-next-line react-refresh/only-export-components
export const useVideoContext = () => {
    const video = useContext(VideoContext);
    if (video === undefined) {
        throw new Error("VideoContext is undefined");
    }
    return video;
}

