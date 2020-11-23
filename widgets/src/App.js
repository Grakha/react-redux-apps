import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


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

    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    );
};

//<Accordion items={ items } />
// <Search />