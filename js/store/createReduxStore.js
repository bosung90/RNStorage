import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function createReduxStore (initialState) {
  const enhancer = compose(
    applyMiddleware(thunk)
  )
  return createStore(rootReducer, initialState, enhancer)
}
