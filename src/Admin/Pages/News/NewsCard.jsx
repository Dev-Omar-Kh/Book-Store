import React, { useEffect, useState } from 'react';

import newsCardCSS from './news.module.css';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

export default function NewsCard({news}) {

    // const news = FakeNews[0];

    // ====== check-for-links ====== //

    const [formattedDescription, setFormattedDescription] = useState(null)

    useEffect(() => {

        if(news){
            
            const regex = /\{([^,]+),\s*(https?:\/\/[^\s]+)\}/ || /\{([^,]+) ,\s*(https?:\/\/[^\s]+)\}/;

            setFormattedDescription(news.description.replace(regex, (match, text, url) => {
                return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text.trim()}</a>`;
            }));

        }

    } , [news]);

    return <React.Fragment>

        <div className={newsCardCSS.card}>

            <div className={newsCardCSS.actions}>

                <button><MdEdit /></button>
                <button><MdDeleteOutline /></button>

            </div>

            <div className={newsCardCSS.title}>

                <h3>{news.title}</h3>

                <p className={newsCardCSS.date}>{news.date}</p>

            </div>

            <div dangerouslySetInnerHTML={{ __html: formattedDescription }} className={newsCardCSS.content}></div>

        </div>

    </React.Fragment>

}
