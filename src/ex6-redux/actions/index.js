// Action creator
export const selectSong = song => {
  // Must return an action (JS object). Type is mandatory.
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
