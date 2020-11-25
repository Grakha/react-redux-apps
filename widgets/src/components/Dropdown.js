import React, { useState, useEffect, useRef } from 'react';
import "./Dropdown.css";


const Dropdown = ({ label, options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

    }, []);

    const renderedOptions = options.map(option => {
        if(option.value === selected.value) {
            return null;
        }

        const itemOption =  <li key={ option.value }
            className="dropdown-item"
            onClick={() => onSelectedChange(option)}
        >
            { option.label }
        </li>;

        return (option.label.indexOf("Select") === 0) ? "" : itemOption;
    });


    return (
        <div ref={ref} className="form-group">
            <div className="label-elem">
                <label className="label">{ label }</label>
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