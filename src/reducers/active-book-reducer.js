import {BOOKSELECTED} from '../actions/index'

export default function (state = null, action) {
  switch (action.type){
    case BOOKSELECTED:
      return action.payload
  }
  return state
}