import React from 'react'

export const Navbar: React.FC = () =>
    <nav>
        <div className="nav-wrapper blue-grey px1">
            <a href="/" className="brand-logo">ReactTS</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Task</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </nav>;

