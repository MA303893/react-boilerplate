import React, {Component} from "react"
import './App.scss'
import BookList from './containers/bookList'
import BookDetail from './containers/book-detail'

class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}

export default App;
