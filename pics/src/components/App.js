import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {

    state = { images: [] };

    // onSearchSubmit(term) {
    //     console.log(term);
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID s-_ciVlZ42Og_iWcBNJ8WN2WXY-BUdvg1JMBGeBHMtw'
    //         }
    //     }).then(response => {
    //         console.log(response.data.results);
    //     });
    // }

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({images: response.data.results})
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <p>Found: { this.state.images.length } images</p>
            </div>
        );
    }
}

export default App;