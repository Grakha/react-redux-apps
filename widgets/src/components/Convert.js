import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('');
    const [debouncedTranslate, setDobouncedTranslate] = useState(text);


    useEffect(() => {

        const timerId = setTimeout(() => {
            setDobouncedTranslate(text);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };

    }, [text]);


    useEffect(() => {

        if(language.value != null) {

            const doTranslation = async () => {

                const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                    params: {
                        q: debouncedTranslate,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                }).catch(error => {
                    console.log(error)
                });

                setTranslated(data.data.translations[0].translatedText);
            };

            doTranslation();
        }


    }, [language, debouncedTranslate]);

    return (
        <div>
            <p>Output translated text:</p>
            <p>
                <span className="content" dangerouslySetInnerHTML={{ __html: translated}}></span>
            </p>
        </div>);

};


export default Convert;