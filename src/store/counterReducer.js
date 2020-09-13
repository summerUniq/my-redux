
const counterReducer = (state = 1, action) => {
    console.log(action);
    switch (action.type) {
        case 'add':
            return state + action.payload;
        case 'minus':
            return state - action.payload;
        default:
            return state
    }
}


export default counterReducer