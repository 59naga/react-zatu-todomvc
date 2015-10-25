// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'

import routes from './src'
import createBrowserHistory from 'history/lib/createBrowserHistory'

injectTapEventPlugin()

const history= createBrowserHistory()

// Boot
addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render(
    <Router routes={routes} history={history}  />,
    document.querySelector('main')
  )
})
