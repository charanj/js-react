import React from 'react'
import myImage from './images/flower-icon.png';
import profile from './images/profile.svg';

export const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={myImage} alt="Flower Icon" width="20" height="20" />
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Materials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Elements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Manufactures</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Collections</a>
          </li>
        </ul>
      </div>
      <div>
        <img src={profile} alt="Profile Picture" className="profile-pic" />
      </div>
    </nav>
  </header>
  )
}
