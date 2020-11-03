import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onSelectVideo }) => {

  return (
      <li className="list-group-item item" onClick={() => onSelectVideo(video)}>
          <img className="img-fluid img-thumbnail mr-2" src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.title }/>
          <div className="content">
              <p className="font-weight-normal">{ video.snippet.title }</p>
          </div>
      </li>
  )
};

export default VideoItem;