import { createStore } from 'redux'

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
const store = createStore(reducer)

export default store