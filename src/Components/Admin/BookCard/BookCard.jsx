import React from 'react';

import bookCSS from '../../../Styles/db_books.module.css';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

export default function BookCard({book}) {


    return <React.Fragment>

        <div className={bookCSS.card}>

            <div className={bookCSS.actions}>

                <button><MdEdit /></button>
                <button><MdDeleteOutline /></button>

            </div>

            <div className={bookCSS.book_img}>
                <img src={book.imageURL} alt={book.bookTitle} />
            </div>

            <div className={bookCSS.book_det}>

                <p className={bookCSS.book_name}>{book.bookTitle}</p>

                <p className={bookCSS.book_author}>" {book.authorName} "</p>

                <p className={bookCSS.book_des}>{book.bookDescription}</p>

                <div className={bookCSS.book_price}>

                    <p className={bookCSS.new_price}>
                        {book.offer ? (book.price - (book.price * (book.offer / 100))).toFixed(2) : book.price}
                        <span>EGP</span>
                    </p>

                    {book.offer && <p className={bookCSS.old_price}>{book.price} EGP</p>}

                </div>

            </div>

        </div>

    </React.Fragment>

}
