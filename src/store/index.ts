import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import todoReducer from '../reducers/todo'

// const composeEnhancers = composeWithDevTools({})

export const buildStore = () =>
  // process.env.NODE_ENV === 'production' ?
  //   createStore(todoReducer) :
  //   createStore(todoReducer, composeEnhancers())
  createStore(todoReducer)
