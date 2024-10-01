import React, { useEffect, useState } from 'react';

import commonCSS from '../../../../Styles/home_common.module.css';
import popularCSS from './popular.module.css';
import FakeDataBooks from '../../../../FakeDataBooks';
import Products from '../../../../Components/Site/Products/Products';

export default function Popular() {

    // ====== get-categories ====== //

    const categories = FakeDataBooks.map(book => book.category);

    const uniqueCategories = [...new Set(categories)];

    // ====== get-single-category ====== //

    const [category, setCategory] = useState(null);
    const [booksData, setBooksData] = useState(FakeDataBooks);

    useEffect(() => {

        if(category){
            setBooksData(FakeDataBooks.filter(book => book.category === category));
        }
        else{
            setBooksData(FakeDataBooks);
        }

    } , [category]);

    return <React.Fragment>

        <div className={commonCSS.container}>

            <div className={commonCSS.title}>

                <span className={commonCSS.line}></span>

                <h3>Popular Books</h3>

                <span className={commonCSS.line}></span>

            </div>

            <div className={popularCSS.categories_cont}>

                <div className={popularCSS.cate_box}>

                    <button 
                        onClick={() => setCategory(null)} 
                        className={`${popularCSS.cate} ${category === null ? popularCSS.active : ''}`}
                    >
                        All Books
                    </button>

                    {uniqueCategories.map((cate , idx) => {
                        return <button 
                            key={idx}
                            onClick={() => setCategory(cate)} 
                            className={`${popularCSS.cate} ${cate === category ? popularCSS.active : ''}`}
                        >
                            {cate}
                        </button>
                    })}

                </div>

            </div>

            <Products data={booksData} />

        </div>

    </React.Fragment>

}
