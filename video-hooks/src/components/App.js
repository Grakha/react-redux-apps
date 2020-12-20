import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {
    const [selectedVideos, setSelectedVideos] = useState(null);
    const [videos, search] = useVideos('ghost');

    useEffect(() => {
        setSelectedVideos(videos[0]);
    }, [videos]);

    return (
        <div className="container-fluid">
            <SearchBar onFormSubmit={search} />
            <div className="row mt-3">
                <div className="col-xl-8 col-lg-6">
                    <VideoDetail video={selectedVideos} />
                </div>
                <div className="col-xl-4 col-lg-6">
                    <VideoList
                        onSelectVideo={(video) => setSelectedVideos(video)}
                        videos={ videos }
                    />
                </div>
            </div>
        </div>
    );

};

export default App;