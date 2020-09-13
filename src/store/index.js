import { createStore, applyMiddleware} from './myRedux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import counterReducer from './counterReducer'

const store = createStore(counterReducer, applyMiddleware(logger, thunk))

export default store