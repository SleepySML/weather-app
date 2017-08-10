import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <div className="title-header"></div>
                <div className="nav-wrapper">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-link"><Link to='/'>Home</Link></li>
                        <li className="nav-link"><Link to='/cities'>Cities</Link></li>
                        <li className="nav-link nav-search"><input type="text"/><Link to='/search'>Search</Link></li>
                    </ul>
                </nav>
                </div>
            </header>
        );
    }
}

export default Header;

