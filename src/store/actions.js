export const add = () => ({type: 'add', payload: 1})

export const minus = () => ({type: 'minus', payload: 1})


export const asyncAdd = () => dispatch => {
    setTimeout(() => {
        dispatch({type: 'add', payload: 1})
    }, 1000)
}