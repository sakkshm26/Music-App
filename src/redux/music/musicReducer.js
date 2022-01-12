const list = [];

const handleList = (state = list, action) => {
    const music = action.payload;
    switch(action.type) {
        case 'ADD_MUSIC':
            const exist = state.find(x => x.id === music.id);
            if(!exist) {
                return [
                    ...state,
                    {
                        ...music
                    }
                ]
            }
            break;
        
        case 'DEL_MUSIC':
            const exist1 = state.find(x => x.id === music.id);
            if(exist1) {
                return state.filter(x => x.id !== music.id)
            }
            break;
    
        default: 
            return state;
        
    }
}

export default handleList