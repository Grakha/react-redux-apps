import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import "./Translate.css";


// const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"; - http://localhost:3000 only


const options = [
    {
        label: 'Select Language',
        value: null
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'English',
        value: 'eng'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Ukrainian',
        value: 'uk'
    },
    {
        label: 'Russian',
        value: 'ru'
    }
];


const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className="form">
            <div className="form-group">
                <div className="label-elem">
                    <label className="label">Enter a text</label>
                </div>
                <div className="input-group input-group-sm">
                    <input
                        type="text"
                        className="form-control input-sm"
                        aria-label="Small"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <Convert language={language} text={text} />
        </div>

    );
};


export default Translate;


