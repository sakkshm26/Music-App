import React, { useState, useEffect } from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {music} from '../MusicList';
import Music from './Music';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

function Main({ setStorage }) {

    const originalList = music;
    const [musicList, setMusicList] = useState(music);

    const getMusic = item => {
        return (
            <Music item={item} key={item.id} setStorage={setStorage} />
        )
    }

    const searchMusic = () => {
        const value = document.getElementById('search-input').value;
        const updatedList = originalList.filter(music => music.name.includes(value));
        setMusicList(updatedList);
    }

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

    const handleSearch = () => {
        handleCloseNavMenu();
        search();
    }

    return (
        <Box className='main-area'>
            <Box display="flex" justifyContent="space-around">
                <Box>
                    <AppBar position="static" className='navbar' sx={{ backgroundColor: "#000" }}>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Box sx={{ flexGrow: 1, display: 'none', color: "#000" }} className="toggle-navbar">
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        className="toggle-button"
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                            color: "#000",
                                            textDecoration:"none"
                                        }}
                                    >
                                        <NavLink to='/'>
                                            <MenuItem key="home" onClick={handleCloseNavMenu} display="flex" width="150px">
                                                {/* <HomeIcon sx={{ marginRight: "20px" }} /> */}
                                                <Typography textAlign="center" color="black">Home</Typography>
                                            </MenuItem>
                                        </NavLink>
                                        <MenuItem key="items" onClick={() => handleSearch()} display="flex" width="150px">
                                            {/* <FormatListBulletedIcon sx={{ marginRight: "20px" }} /> */}
                                            <Typography textAlign="center" color="black">Search</Typography>
                                        </MenuItem>
                                        <NavLink to='/playlist'>
                                            <MenuItem key="sell" onClick={handleCloseNavMenu} display="flex" width="150px">
                                                {/* <AddIcon sx={{ marginRight: "20px" }} /> */}
                                                <Typography textAlign="center" color="black">Playlist</Typography>
                                            </MenuItem>
                                        </NavLink>
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box>
                <div id='search'>
                    <input type='text' id='search-input' onChange={() => searchMusic()} />
                    <FontAwesomeIcon icon={faSearch} className='icon' />
                </div>
            </Box>
            <div className='main-container'>
                <div className='cards'>
                    {musicList.map(item => getMusic(item))}
                </div>
            </div>

        </Box>
    )
}

export default Main
