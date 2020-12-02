import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onSelectVideo}) => {

    const renderedList = videos.map(video => {
        return <VideoItem
            key={video.id.videoId}
            onSelectVideo={onSelectVideo}
            video={video}
        />;
    });

    return (
        <ul className="list-group">{ renderedList }</ul>
    );
};

export default VideoList;