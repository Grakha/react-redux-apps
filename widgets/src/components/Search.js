import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    console.log(results);

    useEffect(() => {

        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };

    }, [term]);

    useEffect(() => {

        const search = async() => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm
                    }
                });

            setResults(data.query.search);
        };

        if (debouncedTerm === "") {
            setResults([]);
        } else {
            search();
        }

    }, [debouncedTerm]);



    // useEffect(() => {
    //
    //     const search = async() => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
    //             {
    //                 params: {
    //                     action: 'query',
    //                     list: 'search',
    //                     origin: '*',
    //                     format: 'json',
    //                     srsearch: term
    //                 }
    //             });
    //
    //         setResults(data.query.search);
    //     };
    //
    //
    //     if (term === "") {
    //         setResults([]);
    //     } else if (term && !results.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //
    //         }, 1000);
    //
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [term]);


    const renderedResult = results.map((result) => {
        return (
            <li key={ result.pageid } className="list-group-item">
                <h5 className="list-title mb-1">{ result.title }</h5>
                <div className="list-item d-flex w-100 justify-content-between">
                    <div className="item-content">
                        <span className="content" dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                    <div className="item-btn ml-3">
                        <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} className="btn btn-light">Go</a>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="inputSearch">What're you searching for in Wiki?</label>
                <input
                    type="search"
                    className="form-control form-control-underlined"
                    id="inputSearch"
                    placeholder="Please Enter ..."
                    aria-label="Search"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
            <ul className="list-group list-group-flush mt-4">
                { renderedResult }
            </ul>
        </div>
    );

};


export default Search;