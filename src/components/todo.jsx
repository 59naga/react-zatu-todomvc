// Dependencies
import React from 'react'
import store from '../store'

// Public
class Todo extends React.Component{
  // handlers
  handleDelete= ()=>{
    store.remove(this.props.index)
  }
  handleAchieve= ()=>{
    store.toggle(this.props.index)
  }

  // lifecycles
  render(){
    return(
      <li>
        <span onClick={this.handleAchieve}>
          {this.props.achieve? '[O]': '[ ]'}
        </span>
        {this.props.title}
        <span onClick={this.handleDelete}>[del]</span>
      </li>
    )
  }
}

export default Todo
