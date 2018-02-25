import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component {
  render(){
    if (!this.props.book) return <div>Select a book!</div>
    return(
      <div>
        <h3>Detail for book: </h3>
        <div><b>Title: </b>{this.props.book.title}</div>
        <div><b>Pages: </b>{this.props.book.pages}</div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return(
    {
      book: state.activeBook
    }
  )
}

export default connect(mapStateToProps)(BookDetail)