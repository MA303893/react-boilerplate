import {BOOKSELECTED} from '../actions/books-actions'

export default function (state = null, action) {
  switch (action.type){
    case BOOKSELECTED:
      return action.payload
    default:
      return state
  }
}