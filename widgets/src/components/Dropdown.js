import React, { useState, useEffect, useRef } from 'react';
import "./Dropdown.css";


const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        document.body.addEventListener('click',(event) => {
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);

        }, {capture: true});

    }, []);

    const renderedOptions = options.map(option => {
        if(option.value === selected.value) {
            return null;
        }

        const itemOption = <li key={ option.value }
            className="dropdown-item"
            onClick={() => onSelectedChange(option)}
        >
            { option.label }
        </li>;

        return (option.label === "Select Color") ? "" : itemOption;
    });


    return (
        <div ref={ref} className="form">
            <div className="label-elem">
                <label className="label">Select a Color</label>
            </div>
            <div
                onClick={() => setOpen(!open)}
                className={`dropdown ${open ? 'show' : ''}`}
            >
                <div className="dropdown-switcher" id="dropdownMenu">
                    { selected.label }
                    <ion-icon name="caret-down-outline"></ion-icon>
                </div>
                <ul className={`dropdown-menu ${open ? 'show' : ''}`}>
                    { renderedOptions }
                </ul>
            </div>
        </div>
    );

};


export default Dropdown;

// <div className="dropdown-divider"></div>