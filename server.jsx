// Dependencies
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {match,RoutingContext} from 'react-router'
import victorica from 'victorica'

import routes from './src'

import express from 'express'
import browserify from 'browserify-middleware'

// Environment
if(process.env.PORT==null){
  process.env.PORT= 59798
}

// Main
let router= routes =>{
  return (req,res,next)=>{
    let location= req.url
    match({location,routes},(error,redirectLocation,renderProps)=>{
      if(redirectLocation){
        return res.redirect(redirectLocation)
      }
      if(error){
        return res.status(500).send(error.message)
      }
      if(renderProps==null){
        return next()
      }

      let route= ReactDOMServer.renderToStaticMarkup(<RoutingContext {...renderProps} />)
      let html= victorica.beautify('<!doctype html>\n'+route)
      res.send(html)
    })
  }
}

// setup browserify middleware
browserify.settings('basedir',__dirname)
browserify.settings('transform',['babelify'])
browserify.settings('extensions',['.js','.json','.jsx'])

// setup history api routes
let app= express()
app.get('/index.js',browserify('client.jsx'))
app.use(router(routes))

// Boot
app.listen(process.env.PORT,()=>{
  console.log('Server running at http://localhost:%s',process.env.PORT)
})
