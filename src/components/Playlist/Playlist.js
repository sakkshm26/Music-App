import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import musicReducer from '../../redux/music/musicReducer';
import './Playlist.css';

function Playlist() {

    const state = useSelector(state => state.handleList);
    const dispatch = useDispatch();

    // const delSong = 

    const playlistMusic = music => {
        return(
        <div className='music' key={music.id}>
            <img src={music.img} />
            <h3>{music.name}</h3>
            <p>{music.artist}</p>
        </div>)
    }

    useEffect(() => {
        localStorage.setItem('playlist',JSON.stringify(state));
    }, [state])

    return (
        <div className='playlist'>
            {state.length ? <div className='playlist-music'>
                <h2>My Playlist</h2>
                {state.map(playlistMusic)}
                </div> 
            : 
            <div>
                <h2>No songs in the playlist, let's add some!</h2>    
            </div>
            }
        </div>
    )
}

export default Playlist
