import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderedList() {
        return this.props.songs.map(song => {
            return(
                <li className="list-group-item d-flex justify-content-between align-items-center" key={song.title}>
                    <div className="text-left">{song.title}</div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.props.selectSong(song)}
                    >
                        Select
                    </button>
                </li>
            );
        });
    }

    render() {
        return <ul className="list-group list-group-flush col-5">{ this.renderedList() }</ul>;
    };
};


const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);