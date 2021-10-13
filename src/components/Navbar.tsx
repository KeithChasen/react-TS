import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () =>
    <nav>
        <div className="nav-wrapper blue-grey px1">
            <a href="/" className="brand-logo">ReactTS</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Tasks</NavLink></li>
                <li><NavLink to="/about">Info</NavLink></li>
            </ul>
        </div>
    </nav>;

