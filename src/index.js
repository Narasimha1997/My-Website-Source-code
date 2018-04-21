import React from 'react'
import ReactDOM from 'react-dom'
import {NavBar, Home} from './App'
import Projects from './OSP'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Internship}  from './Internship'
import Profile from './WebApp'

ReactDOM.render(
    <NavBar />, document.getElementById('nav')
)

ReactDOM.render(
    <BrowserRouter>
      <div>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = {process.env.PUBLIC_URL+'/Projects'} component = {Projects}/>
          <Route exact path = {process.env.PUBLIC_URL+'/internship'} component = {Internship} />
          <Route exact path = {process.env.PUBLIC_URL+'/profile'} component = {Profile} />
      </div>
    </BrowserRouter>,
    document.getElementById('root')
)