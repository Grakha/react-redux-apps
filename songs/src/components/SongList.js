import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        console.log(this.props);
        return <div>List of songs</div>;
    };
};


const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);