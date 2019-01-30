import React from 'react';
import Youtube from '../api/Youtube';
//import Mocky from '../api/Mocky';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videoList: [], selectedVideo: null };

    componentDidMount() {
        this.onTextSubmit('');
    }

    // callback function to pass to SearchBar component.
    onTextSubmit = async (text) => {
        // Call the api with the text submitted.
        const response = await Youtube.get('/search', {
            params: { q: text }
        });
        // APi for testing and processing responses.
        //const response = await Mocky.get('/5c47baa73100002d008a1ea5');
        // Save the video list to the component state.
        this.setState({
            videoList: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onTextSubmit={this.onTextSubmit}></SearchBar>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo}></VideoDetail>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videoList} onVideoSelect={this.onVideoSelect}></VideoList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;