import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducer = (state = 1, action) => {
    console.log(action);
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state
    }
}
const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store