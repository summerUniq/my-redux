import { createStore, applyMiddleware} from './myRedux'
import {logger, thunk} from './myMiddleware'
import counterReducer from './counterReducer'

const store = createStore(counterReducer, applyMiddleware(logger, thunk))

export default store