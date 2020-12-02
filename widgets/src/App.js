import React, { useState } from 'react';
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate"
import Header from "./components/Header";


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
];


const options = [
    {
        label: "Select Color",
        value: null
    },
    {
        label: "The Red color",
        value: "red"
    },
    {
        label: "This is color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    }

];


export default function App() {

    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list" >
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    lable="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};


// <Translate />
// <button className="btn btn-primary" onClick={() => setShowDropdown(!showDropdown)} >
//     Toggle Dropdown
// </button>
// { showDropdown ? <Dropdown
//     label="Select a Color"
//     selected={selected}
//     onSelectedChange={setSelected}
//     options={options}
// /> : null }

//<Accordion items={ items } />
// <Search />