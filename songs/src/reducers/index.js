import { combineReducers } from "redux";

// Reducers
const songsReducer = () => {
    return [
        { title: 'Check those pents', duration: '3:55' },
        { title: 'Light City', duration: '4:00' },
        { title: 'Fleshlight', duration: '1:55'},
        { title: 'Jass', duration: '2:33'}
    ]
};

const selectedSongReduser = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReduser
});