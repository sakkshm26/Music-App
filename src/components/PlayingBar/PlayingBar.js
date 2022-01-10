import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './PlayingBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addMusic } from '../../redux/music/musicAction';

function PlayingBar({ storage }) {

  const dispatch = useDispatch();

  const addSong = () => {
    dispatch(addMusic(JSON.parse(localStorage.getItem('music'))));
  }

  const handleLike = () => {
    const song = document.getElementById('like');
    song.classList.contains('liked') ? song.classList.remove('liked') : song.classList.add('liked');
    console.log(localStorage.getItem('music'))
  }

  useEffect(() => {
    if (localStorage.getItem('music')) {
      const player = document.getElementsByTagName('audio')[0];
      player.load();
      player.play();
    }
  }, [storage])

  return (
    <div>
      {localStorage.getItem('music') ?
        <div className='playing-bar'>
          <div className='music-info'>
            <img src={`${JSON.parse(storage).img}`} alt='Not found' />
            <div className='name'>
              <p className='music-name'>{JSON.parse(storage).name}</p>
              <p className='artist-name'>{JSON.parse(storage).artist}</p>
            </div>
          </div>

          <audio controls className='player'>
            <source src={require(`../../media/${JSON.parse(storage).src}`)} type="audio/mpeg"></source>
          </audio>

          <div className='icons'>
            <FontAwesomeIcon icon={faHeart} id='like' onClick={() => handleLike()} />
            <FontAwesomeIcon icon={faPlus} id='add' onClick={() => addSong()} />
          </div>
        </div>
        :
        <div className='before-music'>Ready for some music?</div>}

    </div>
  )
}

export default PlayingBar;
