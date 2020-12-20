import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar row m-0 px-2 py-4 border border-secondary rounded">
            <div className="col-12">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="searchVideo">Youtube content:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="searchVideo"
                            placeholder="Search query . . ."
                            value={term}
                            onChange={(event) => setTerm(event.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;