import React, {useState, useEffect} from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import songList from '../MusicList.js';
import Music from './Music';

function Main({setStorage}) {

    const [musicList, setMusicList] = useState(songList.music);

    const getMusic = item => {
        return (
            <Music item={item} key={item.id} setStorage={setStorage}/>
        )
    }

    const searchMusic = () => {
        const value = document.getElementById('search-input').value;
        const updatedList = musicList.filter(music => music.name === value);
        setMusicList(updatedList);
        // console.log(updatedList)
    }

    return (
        <div className='main-area'>
            <div id='search'>
                <input type='text' id='search-input' />
                <FontAwesomeIcon icon={faSearch} className='icon' onClick={() => searchMusic()}/>
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
