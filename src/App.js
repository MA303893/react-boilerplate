import React, {Component} from "react"
import './App.scss'
import BookList from './containers/bookList'

class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
      </div>
    );
  }
}

export default App;
