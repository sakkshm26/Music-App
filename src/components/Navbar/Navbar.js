import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faList, faHeart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className='nav-bar'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='nav-links'>
                <ul>
                    <li><NavLink to='/'><FontAwesomeIcon icon={faHome} className='icon'/>Home</NavLink></li>
                    <li><NavLink to='/'><FontAwesomeIcon icon={faSearch} className='icon'/>Search</NavLink></li>
                    <li><NavLink to='/playlist'><FontAwesomeIcon icon={faList} className='icon'/>Your Playlist</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
