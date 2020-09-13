export function logger({dispatch, getState}) {
    return dispatch => action => {
        // 中间件任务
        console.log(action.type + '执行了');
        // 下一个中间件
        return dispatch(action)
    }
}


export function thunk({dispatch, getState}) {
    return dispatch => action => {
        // 中间件的功能

        if (typeof action === 'function'){
            return action(dispatch, getState)
        } else {
            return dispatch(action)
        }
    }
}