import { createContext } from "react";
import { Video, videoList } from "../utils/vid-utils"

const defaultVideo: Video = {
    title: videoList[0].title,
    id: videoList[0].id
}

export const VideoContext = createContext({defaultVideo})