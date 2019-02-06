import React from 'react';
import { connect } from 'react-redux';

function SongDetail({ song }) {
  if (!song) return <div>select a song</div>;

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
}

/* This function maps the redux state to the component props.
 * @state contains all the data inside de redux store.
 * selectedSong property is defined in the combine reducers.
 */
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
