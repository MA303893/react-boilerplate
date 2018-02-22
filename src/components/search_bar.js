import React, {Component} from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onSearchTermChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onSearchTermChange(event.target.value)}
        />
      </div>
    )
  }
}