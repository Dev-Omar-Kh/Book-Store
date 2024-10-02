import React from 'react';

import articlesCSS from './articles.module.css';

export default function Articles() {

    return <React.Fragment>

        <div className={articlesCSS.container}>

            <div className={articlesCSS.card}>

                <div className={articlesCSS.art_img}></div>

                <div className={articlesCSS.art_det}>

                    <h3>Articles Name</h3>

                    <div className={articlesCSS.art_rate}></div>

                </div>

                <div className={articlesCSS.art_social}>

                    

                </div>

            </div>

        </div>

    </React.Fragment>

}
