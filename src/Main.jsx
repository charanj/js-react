import React from 'react'
import Nav from './Nav'
import MainContent from './MainContent'

const Main = () => {
  return (
    <div className="container-fluid main-content">
      <div className="row">
        <Nav />
        <MainContent />
      </div></div>
  )
}

export default Main