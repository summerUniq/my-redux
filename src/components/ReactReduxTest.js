import React from 'react';
import {connect} from 'react-redux'
import {add, minus, asyncAdd} from '../store/actions'

class ReactReduxTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>
            <button onClick={this.props.add}>+</button>
        <span>还剩次数{this.props.counter}</span>
        <button onClick = {this.props.minus}>-</button>
        <button onClick = {this.props.asyncAdd}>async + </button>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    counter: state
})

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: () => dispatch({type: "add"}),
//         minus: () => dispatch({type: 'minus'}),
//         asyncAdd: () => dispatch(() => {
//             setTimeout(() => {
//                 dispatch({type: 'add'})
//             }, 1000)
//         })
//     }
// }
 const mapDispatchToProps = {
    add,
    minus,
    asyncAdd,
 }

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTest);