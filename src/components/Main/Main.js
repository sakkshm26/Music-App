import React, {useState, useEffect} from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import songList from '../MusicList.js';
import Music from './Music';

function Main({setStorage}) {

    const originalList = songList.music;
    const [musicList, setMusicList] = useState(songList.music);

    const getMusic = item => {
        return (
            <Music item={item} key={item.id} setStorage={setStorage}/>
        )
    }

    const searchMusic = () => {
        const value = document.getElementById('search-input').value;
        const updatedList = originalList.filter(music => music.name.includes(value));
        setMusicList(updatedList);
    }

    return (
        <div className='main-area'>
            <div id='search'>
                <input type='text' id='search-input' onChange={() => searchMusic()} />
                <FontAwesomeIcon icon={faSearch} className='icon'/>
            </div>
            <div className='main-container'>
                <div className='cards'>
                    {musicList.map(item => getMusic(item))}
                </div>
            </div>
        
        </div>
    )
}

export default Main
