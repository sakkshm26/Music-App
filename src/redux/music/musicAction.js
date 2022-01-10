export const addMusic = music => {
    return {
        type: 'ADD_MUSIC',
        payload: music
    }
}

export const delMusic = music => {
    return {
        type: 'DEL_MUSIC',
        payload: music
    }
}