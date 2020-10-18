import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    render() {
        console.log(this.state.term);
        return (
            <div className="search-bar row m-3 px-2 py-4 border border-secondary rounded">
                <div className="col-10">
                    <form>
                        <div className="form-group">
                            <label htmlFor="searchVideo">Youtube content:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="searchVideo"
                                placeholder="Search query . . ."
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;