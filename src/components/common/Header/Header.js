import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            search: "search"
        }
    }
    render(){
        return (
            <header className="header">
                <div className="title-header"></div>
                <div className="nav-wrapper">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-link"><Link to='/'>Home</Link></li>
                            <li className="nav-link"><Link to='/cities'>Cities</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;

