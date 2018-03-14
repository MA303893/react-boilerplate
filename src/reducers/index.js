import {combineReducers} from 'redux'
import {books} from './books-reducer'
import ActiveBook from "./active-book-reducer"


const rootReducer = combineReducers(
  {
    books,
    activeBook: ActiveBook
  }
)

export default rootReducer