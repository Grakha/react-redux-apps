import React, { useState } from 'react';
import Link from './Link';


const menu = [
    {
        href: '/',
        text: 'Accordion'
    },
    {
        href: '/list',
        text: 'Search'
    },
    {
        href: '/dropdown',
        text: 'Dropdown'
    },
    {
        href: '/translate',
        text: 'Translate'
    }
];


const Header = () => {

    const [activeIndex, setActiveIndex] = useState(false);

    const onLinkClick = (index) => {
        setActiveIndex(index);
    };

    const renderedLinks = menu.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            <li onClick={() => onLinkClick(index)} className={`nav - item mr-4 ${active}`} key={ index }>
                <Link className="nav-link" href={ item.href }>{ item.text }</Link>
            </li>
        );
    });

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
            <ul className="navbar-nav mr-auto">
                { renderedLinks }
            </ul>
        </nav>
    );

};

export default Header;

// <li onClick={() => setActiveLink(!activeLink)} className={`nav-item mr-4 ${activeLink ? "active" : ""}`} key={ item.text }>
//     <Link className="nav-link" href={ item.link }>{ item.text }</Link>
// </li>

// <li className="nav-item mr-4">
//     <Link className="nav-link" href="/">Accordion</Link>
// </li>
// <li className="nav-item mr-4">
//     <Link className="nav-link" href="/list">Search</Link>
// </li>
// <li className="nav-item mr-4">
//     <Link className="nav-link" href="/dropdown">Dropdown</Link>
// </li>
// <li className="nav-item mr-4">
//     <Link className="nav-link" href="/translate">Translate</Link>
// </li>