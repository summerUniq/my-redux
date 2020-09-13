
/**
 * 自己实现redux
 * 核心实现：
 * 存储状态 state
 * 获取状态 getState
 * 更新状态 dispatch
 * 更新订阅
 * @param {} reducer 
 */

export function createStore(reducer) {
    // 保存状态
    let currentState = undefined // undefined表示定义了变量没有赋值， null表示定义了变量值为null, 设及到初始化值的问题
    // 回调函数
    let currentListeners = []

    function getState() {
        return currentState
    }

    function dispatch(action) {
        // 更新状态
        currentState = reducer(currentState, action)
        // 变更通知
        currentListeners.map((v) => v())
        return action
    }

    function subscribe(listener) {
        currentListeners.push(listener)
    }

    // 初始化状态
    dispatch({type: '@IMOOC/KKB-REDUX'})

    return {
        getState, dispatch, subscribe
    }
}