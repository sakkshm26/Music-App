import React from 'react'

function Music({item, setStorage}) {

    const selectMusic = () => {
        localStorage.setItem('music', JSON.stringify({'id': item.id, 'name': item.name, 'artist': item.artist, 'img': item.img, 'src': item.src, 'liked': item.liked}));
        setStorage(localStorage.getItem('music'));
    }

    return (
        <div className='music-card' onClick={() => selectMusic()}>
            <img src={item.img} alt='Not found' />
            <p className='name'>{item.name}</p>
            <p className='artist'>{item.artist}</p>
        </div>
    )
}

export default Music
