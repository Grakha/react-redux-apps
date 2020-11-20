import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            <div className="quiz" key={ item.title }>
                <div className={`quiz-title ${active}`} onClick={() => onTitleClick(index)}>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <ion-icon name="caret-down-outline"></ion-icon>
                    <h5 className="title">{ item.title }</h5>
                </div>

                <div className={`quiz-content ${active}`}>
                    <p className="content">{ item.content }</p>
                </div>
            </div>
        );
    });
    return (
        <React.Fragment>
            <div className="accordion-quiz" >
                { renderedItems }
            </div>
        </React.Fragment>
    );
};

export default Accordion;