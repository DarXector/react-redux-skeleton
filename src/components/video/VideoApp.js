import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const YT_API_KEY = 'AIzaSyAhi-r_JC_qE_8OtrNHCCEwpQTJUzUYmWA';

export default class VideoApp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    componentDidMount()
    {
        this.videoSearch('surfboards')
    }

    videoSearch(term)
    {
        YTSearch({key: YT_API_KEY, term: term}, videos =>
        {
            this.setState(
                {
                    videos: videos,
                    selectedVideo: videos[0]
                }
            );
            console.log(this.state.videos);
        });
    }

    render()
    {
        const videoSearch = _.debounce((term) =>
        {
            this.videoSearch(term)
        }, 500);

        return (
            <div>
                <SearchBar onSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}