import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faList, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

function NavBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [display, setDisplay] = useState('block');
    const [profile, setProfile] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const search = () => {
        document.getElementById('search-input').focus();
    }

    return (
        <div className='nav-bar'>
            <div className='desktop'>
                <div className='logo'>
                    <img src={logo} alt="Not found" />
                </div>
                <div className='nav-links'>
                    <ul>
                        <li><NavLink to='/'><FontAwesomeIcon icon={faHome} className='icon' />Home</NavLink></li>
                        <li onClick={() => search()}><FontAwesomeIcon icon={faSearch} className='icon' />Search</li>
                        <li><NavLink to='/playlist'><FontAwesomeIcon icon={faList} className='icon' />Playlist</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar