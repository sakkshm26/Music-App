import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Playlist.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlay } from '@fortawesome/free-solid-svg-icons';
import { delMusic } from '../../redux/music/musicAction';

function Playlist({setStorage}) {

    const state = useSelector(state => state.handleList);
    const dispatch = useDispatch();

    const selectMusic = (music) => {
        localStorage.setItem('music',JSON.stringify(music));
        setStorage(localStorage.getItem('music'));
        console.log('YES')
    }

    const delSong = (music) => {
        dispatch(delMusic(music));
    }

    const playlistMusic = music => {
        return (
            <div className='music' key={music.id}>
                <img src={music.img} />
                <p className='name'>{music.name}</p>
                <p className='artist'>{music.artist}</p>
                <div className='icons'>
                    <FontAwesomeIcon id='play-icon' icon={faPlay} onClick={() => selectMusic(music)}/> 
                    <FontAwesomeIcon id='cross-icon' icon={faTimes} onClick={() => delSong(music)}/>
                </div>
            </div>)
    }

    /* useEffect(() => {
        localStorage.setItem('playlist', JSON.stringify(state));
    }, [state]) */

    return (
        <div className='playlist'>
            {state.length ? <div className='playlist-music'>
                <h2>My Playlist</h2>
                {state.map(playlistMusic)}
            </div>
                :
                <div className='playlist-before'>
                    <h2>No songs in the playlist, let's add some!</h2>
                    <NavLink to='/'>Home</NavLink>
                </div>
            }
        </div>
    )
}

export default Playlist
