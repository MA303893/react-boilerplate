import React, {Component} from "react"

export default class VideoListItem extends Component {
  render() {
    const {video, onVideoSelect} = this.props

    const imageUrl = video.snippet.thumbnails.default.url
    const videoTitle = video.snippet.title

    return (
      <li className='list-group-item' onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img src={imageUrl} alt="" className="media-object"/>
          </div>
          <div className="media-body">
            <div className="media-heading">
              {videoTitle}
            </div>
          </div>
        </div>
      </li>
    )
  }
}