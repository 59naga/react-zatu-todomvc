// Dependencies
import React from 'react'
import ReactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import store from '../store'

// Environment
const ENTER_KEY_CODE= 13

// Public
class Form extends React.Component{
  constructor(){
    super()

    this.state= {}
  }

  // handlers
  handleKeyDown= (event)=>{
    let title= this.state.title
    if(!title){
      return
    }
    if(event.keyCode!==ENTER_KEY_CODE){
      return
    }

    store.add(title)

    this.setState({title:null})
  }

  // lifecycles
  render(){
    return(
      <input
        valueLink={this.linkState('title')}
        onKeyDown={this.handleKeyDown}
        autoFocus
      />
    )
  }
}
ReactMixin(Form.prototype,LinkedStateMixin)

export default Form
