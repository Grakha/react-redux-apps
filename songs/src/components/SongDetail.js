import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
    if(!selectedSong) {
        return <div className="col-5 text-black pt-3 bg-light">Select Song Please</div>;
    }

    return (
        <div className="col-5 text-black pt-3 bg-light">
            <p>Details:</p>
            <div className="ml-4">
                <p className="mb-0"><span className="font-weight-bold">Title: </span>{ selectedSong.title }</p>
                <p><span className="font-weight-bold">Duration: </span>{ selectedSong.duration }</p>
            </div>
        </div>
    );
};


const mapStateToProp = (state) => {
    return { selectedSong: state.selectedSong };
};

export default connect(
    mapStateToProp
)(SongDetail);