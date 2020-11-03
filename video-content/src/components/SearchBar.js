import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onSubmitForm = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar row m-0 px-2 py-4 border border-secondary rounded">
                <div className="col-12">
                    <form onSubmit={this.onSubmitForm}>
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