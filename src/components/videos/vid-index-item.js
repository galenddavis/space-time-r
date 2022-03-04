import React from 'react'

export const VideoIndexItem = ({ selectVid, video }) => {
    return (
        <li className='vid-list-item' onClick={() => selectVid(video.id)} >
            {video.title}
        </li>
    )
}
