import React, {Component} from 'react'
import {connect} from 'react-redux'
import {booksPostData} from "../actions/books-actions"

class AddBook extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      pages: ''
    }
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onPagesChange = (e) => {
    this.setState({
      pages: e.target.value
    })
  }

  OnCreateBook = (e) => {
    e.preventDefault()
    let title = document.getElementById('title').value
    let pages = parseInt(document.getElementById('pages').value, 10)
    let book = {
      title, pages
    }
    console.log(book)
    this.props.addBook('http://5aa6141faf352a001477f4af.mockapi.io/books', book)
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Title"
               value={this.state.title} onChange={this.onTitleChange}
               id='title'
        />
        <input type="text" className="form-control" placeholder="Pages"
               value={this.state.pages} onChange={this.onPagesChange}
               id='pages'
        />
        <button className="btn btn-default" type="button"
                onClick={this.OnCreateBook}
        >Go!
        </button>
      </div>
    )
  }
}
// function mapStateToProps(state) {
//   return ({
//     books: state.books,
//     hasErrored: state.itemsHasErrored,
//     isLoading: state.itemsIsLoading
//   })
// }

function mapDispatchToProps(dispatch) {
  return {
    addBook: (url, book) => dispatch(booksPostData(url, book))
  }
}

export default connect(null,mapDispatchToProps)(AddBook)