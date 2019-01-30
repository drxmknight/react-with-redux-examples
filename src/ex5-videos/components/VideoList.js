import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

    // Iterator that return a VideoItem for every video.
    const renderedVideoList = videos.map((vid) => {
        return (
            <VideoItem key={vid.id.videoId} video={vid} onVideoSelect={onVideoSelect}></VideoItem>
        );
    });

    // Render the component.
    return (
        <div className="ui relaxed divided list">
            {renderedVideoList}
        </div>
    );
}

export default VideoList;