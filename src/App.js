import React, {Component} from "react"
import './App.scss'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCcqZEb9KznmsM2t-8gYmHG-Q6Od82zXKM'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.onVideoSelect = this.onVideoSelect.bind(this)
    this.videoSearch('bullet for my valentine')
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  videoSearch(term) {
    YTSearch(
      {key: API_KEY, term: term},
      (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        })
      })
  }


  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => {this.videoSearch(term)}}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
