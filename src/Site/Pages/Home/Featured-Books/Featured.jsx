import React from 'react';

import commonCSS from '../../../../Styles/home_common.module.css';
import Products from '../../../../Components/Site/Products/Products';
import FakeDataBooks from './../../../../FakeDataBooks';

export default function Featured() {

    // ====== send-books-data ====== //

    const featuredBooks =  FakeDataBooks.slice(6 , 10);

    return <React.Fragment>

        <div className={commonCSS.container}>

            <div className={commonCSS.title}>

                <span className={commonCSS.line}></span>

                <h3>Featured Books</h3>

                <span className={commonCSS.line}></span>

            </div>

            <Products data={featuredBooks} />

        </div>

    </React.Fragment>

}
