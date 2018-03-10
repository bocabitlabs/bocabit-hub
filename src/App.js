import React, { Component } from 'react'
import ReactGA from 'react-ga'

import Home from './components/Home'
import './App.css'

ReactGA.initialize('UA-1536056-7')
ReactGA.pageview(window.location.pathname + window.location.search)

class App extends Component {
  render () {
    return (
      <Home />
    )
  }
}

export default App
