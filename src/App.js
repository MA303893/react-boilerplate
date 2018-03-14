import React, {Component} from "react"
import './App.scss'
import BookList from './containers/bookList'
import BookDetail from './containers/book-detail'
import AddBook from './containers/add-book'

class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
        <AddBook/>
      </div>
    );
  }
}

export default App;
