// Dependencies
import EventEmitter from 'events'

// Public
class Store extends EventEmitter{
  constructor(){
    super()

    this.todos= []
    this.achievements= []

    this.emitChange= this.emit.bind(this,'change')
  }

  getAll(){
    return this.todos
  }

  add(title){
    let todo= {
      achieve: false,
      title: title,
    }

    this.todos.push(todo)

    process.nextTick(this.emitChange)
  }
  toggle(index){
    let todo= this.todos[index]
    if(todo==null){
      return false
    }

    todo.achieve= !todo.achieve

    process.nextTick(this.emitChange)
  }
  rename(index,title){
    let todo= this.todos[index]
    if(todo==null){
      return false
    }

    todo.title= title

    process.nextTick(this.emitChange)
  }

  remove(index){
    if(this.todos[index]==null){
      return false
    }

    let todo= this.todos.splice(index,1)[0]
    
    process.nextTick(this.emitChange)
  }
}

export {Store}
export default new Store
