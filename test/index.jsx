import {Store} from '../src/store'
import {equal,deepEqual} from 'power-assert'

describe('store',()=>{
  let store= new Store
  beforeEach(()=>{
    store.removeAllListeners()
  })

  it('create: `add` event after create',(done)=>{
    store.add('nanka')
    store.on('change',()=>{
      let todos= store.getAll()

      equal(todos.length,1)
      deepEqual(todos,[{achieve:false,title:'nanka'}])
      done()
    })
  })

  it('read: .getAll',(done)=>{
    let todos= store.getAll()

    equal(todos.length,1)
    deepEqual(todos,[{achieve:false,title:'nanka'}])
    done()
  })

  it('update: `toggle` event after update',(done)=>{
    store.toggle(0)
    store.on('change',()=>{
      let todos= store.getAll()

      equal(todos.length,1)
      deepEqual(todos,[{achieve:true,title:'nanka'}])
      done()
    })
  })
  it('update: `rename` event after update',(done)=>{
    store.rename(0,'hogehoge')
    store.on('change',()=>{
      let todos= store.getAll()

      equal(todos.length,1)
      deepEqual(todos,[{achieve:true,title:'hogehoge'}])
      done()
    })
  })

  it('delete: remove at index',(done)=>{
    store.remove(0)
    store.on('change',()=>{
      let todos= store.getAll()

      equal(todos.length,0)
      deepEqual(todos,[])
      done()
    })
  })
})
