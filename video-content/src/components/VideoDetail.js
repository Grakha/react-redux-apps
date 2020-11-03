import React from 'react';


const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading</div>;
    }


    const srcVideo = `https://www.youtube.com/embed/${video.id.videoId}`;


    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={srcVideo} title={video.snippet.title} />
            </div>
            <div className="mt-3 px-3 py-4 border rounded">
                <h4>{video.snippet.title}</h4>
                <p className="">{video.snippet.description}</p>
            </div>
        </div>
    );
};


export default VideoDetail;