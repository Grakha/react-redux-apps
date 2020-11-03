import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyBY7shIDBXd5lZ8hWyreyuc4CG66wDyTYc";

class App extends React.Component {

    state = { videos: [] , selectedVideo: null };

    componentDidMount() {
      this.onTermSubmit('ghost');
    };

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onSelectVideo = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="container-fluid">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="row mt-3">
                    <div className="col-xl-8 col-lg-6">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <VideoList
                            onSelectVideo={this.onSelectVideo}
                            videos={ this.state.videos }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;