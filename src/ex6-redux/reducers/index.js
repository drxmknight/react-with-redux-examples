import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'no scrubs', duration: '4:05' },
    { title: 'macarena', duration: '2:30' },
    { title: 'all stars', duration: '3:15' },
    { title: 'see ya', duration: '3:09' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// Combine reducers.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
