import React from 'react'

const Nav = () => {
  return (
    <nav className="col-md-2 vertical-menu">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">My Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Collections</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav