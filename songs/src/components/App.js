import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center pt-4">
            <SongList />
            <SongDetail />
        </div>
    );
};

export default App;