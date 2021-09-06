import React from 'react';
import logo from '../../img/logo.png'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <div className = "nav-wrap">
            <div className="nav-container">
                <div className="nav">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="list">
                        <nav>
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li><a href="/">BLOCKCHAIN</a></li>
                                <li><a href="/">NFTS</a></li>
                                <li><a href="/">OPINIONS</a></li>
                                <li><a href="/">VIDEOS</a></li>
                                <li><a href="/">GUIDES</a></li>
                                <li><a href="/">DEALS</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="icon-search clr flx">
                        <div className="in-form">
                            <input type="text" />
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;