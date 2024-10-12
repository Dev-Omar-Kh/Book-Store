import React from 'react';
import { Link } from 'react-router-dom';

import { GrArticle } from 'react-icons/gr';

import titleCSS from '../../../Styles/db_title.module.css';
import newsCSS from './news.module.css';
import NewsCard from './NewsCard';
import FakeNews from '../../../Site/Pages/Newsletter/News';

export default function NewsList() {

    const news = FakeNews;

    return <React.Fragment>

        <div className={titleCSS.container}>

            <div className={titleCSS.title}>

                <div className={titleCSS.title_box}>

                    <GrArticle />
                    <p>News</p>

                </div>

                <div className={titleCSS.actions}>

                    <Link to={'add'}>Add News</Link>

                </div>

            </div>

            <div className={newsCSS.container}>

                {news.map( news => <NewsCard key={news._id} news={news} />)}

            </div>

        </div>

    </React.Fragment>

}
