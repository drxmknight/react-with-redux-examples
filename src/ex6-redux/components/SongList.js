import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button onClick={() => this.props.selectSong(song)} className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

/* This function maps the redux state to the component props.
 * @state contains all the data inside de redux store.
 * songs property is defined in the combine reducers.
 */
const mapStateToProps = state => {
  return { songs: state.songs };
};

/* Set the components props to the redux state.
 * Take the action creators passed in the object and connect them
 * with the store.dispatch function of redux.
 */
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
