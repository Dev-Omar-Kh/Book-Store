import React from 'react';

import bestProCSS from './best_pro.module.css';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import FakeDataBooks from './../../../../FakeDataBooks';

export default function BestProduct() {

    const bestBook = FakeDataBooks.slice(2 , 3);
    const data = bestBook[0]

    return <React.Fragment>

        <div className={bestProCSS.container}>

            <div className={bestProCSS.img_cont}>

                <img src={data.imageURL} alt="" />

            </div>

            <div className={bestProCSS.det_cont}>

                <h3>Best Selling Book</h3>

                <p className={bestProCSS.book_author}>{data.authorName}</p>

                <p className={bestProCSS.book_name}>{data.bookTitle}</p>

                <p className={bestProCSS.book_des}>{data.bookDescription.split(' ').slice(0 , 20).join(' ') + '...'}</p>

                <p className={bestProCSS.book_price}>{10000} <span>EGP</span></p>

                <Link className={bestProCSS.action}>
                    <p>View book details</p>
                    <IoMdArrowRoundForward />
                </Link>

            </div>

        </div>

    </React.Fragment>

}
