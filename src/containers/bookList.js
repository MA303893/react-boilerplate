import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectBook, booksFetchData} from "../actions/books-actions"

class BookList extends Component {

  componentDidMount() {
    this.props.fetchData('http://5aa6141faf352a001477f4af.mockapi.io/books');
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.id}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  })
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(booksFetchData(url)),
    selectBook: (book) => dispatch(selectBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)