import React, { Component } from 'react'
import { Link }  from 'react-router-dom'

export default class Navbar extends Component {

    render() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Dog Registry</Link>
            <Link to="/owners" className="nav-link">Owners</Link>
            <Link to="/dogs" className="nav-link">Dogs</Link>
      </nav>
    )
    }
}