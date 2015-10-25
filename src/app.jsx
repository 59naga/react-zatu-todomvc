// Dependencies
import React from 'react'
import ReactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import Todo from './components/todo'
import Form from './components/form'

import store from './store'

// Public
class App extends React.Component{
  constructor(){
    super()

    this.state= {
      todos: store.getAll(),
    }
  }

  // handlers
  handleChange= ()=>{
    this.setState({todos:store.getAll()})
  }

  // lifecycles
  componentDidMount(){
    store.on('change',this.handleChange)
  }
  componentWillUnmount(){
    store.off('change',this.handleChange)
  }
  render(){
    let todos= []
    this.state.todos.forEach((todo,index)=>{
      todos.push(<Todo key={index} {...todo} index={index} />)
    })

    let content= (
      <article>
        <div>TODO むぶしいしー</div>

        <Form />
        {todos}
      </article>
    )

    // document rendering if server-side
    if(typeof window==='object'){
      return content
    }
    return(
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>hello world</title>
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' />
          <script src="index.js"></script>
        </head>
        <body>
          <main>{content}</main>
        </body>
      </html>
    )
  }
}

export default App
