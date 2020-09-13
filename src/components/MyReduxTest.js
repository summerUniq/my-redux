import React, { Component } from 'react';
import store from '../store'

class MyReduxTest extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // componentDidMount(){
    //     store.subscribe(() => this.forceUpdate())
    // }
    render() { 
        return ( 
        <div>
            <button onClick={() => store.dispatch({type: 'add'})}>+</button>
            <span>按钮数据： {store.getState()}</span>
            <button onClick={() => store.dispatch({type: 'minus'})}>-</button>
            <button onClick={() => store.dispatch(() => {
                setTimeout(() => {
                    store.dispatch({type: 'add'})
                }, 1000)
            })}>async ++</button>
        </div>
         );
    }
}
 
export default MyReduxTest;