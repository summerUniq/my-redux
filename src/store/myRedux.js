
/**
 * 自己实现redux
 * 核心实现：
 * 存储状态 state
 * 获取状态 getState
 * 更新状态 dispatch
 * 更新订阅
 * @param {} reducer 
 */

export function createStore(reducer, enhancer) {
    // 增强createStore
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
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

// enhancer(createStore)(reducer)
export function applyMiddleware(...middlewares) {
    // 返回强化以后函数
    return createStore => (...args) => {
        // 完成createStore应该完成的事
        const store = createStore(...args) // args就是reducer
        /**
         * 增强dispatch
         */
        // 原生的dispatch
        let dispatch = store.dispatch
        // 中间件的api
        const midApi = {
            dispatch: (...arugs) => dispatch(...arugs),
            getState: store.getState
        }
        // 是中间件可以获取状态值，派发action  
        const chunks = middlewares.map(middleware => middleware(midApi))
        // 强化dispath, 顺序执行中间件
        dispatch = compose(...chunks)(store.dispatch)

        return {
            ... store,
            dispatch
        }
    }
}

export function compose(...funcs) {
    if(funcs.length === 0) {
        return arg => arg
    }
    if(funcs.length === 1){
        return funcs[0]
    }
    return funcs.reduce((left, right) => (...args) => right(left(...args)))
}