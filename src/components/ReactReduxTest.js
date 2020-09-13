import React from 'react';
import {connect} from 'react-redux'

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
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({type: "add"}),
        minus: () => dispatch({type: 'minus'})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTest);