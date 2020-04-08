import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
          </nav>
        )
    }
}
