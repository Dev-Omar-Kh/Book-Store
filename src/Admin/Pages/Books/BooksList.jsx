import React from 'react';
import FakeDataBooks from '../../../FakeDataBooks';
import BookCard from '../../../Components/Admin/BookCard/BookCard';

import { PiBooksFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import titleCSS from '../../../Styles/db_title.module.css';
import booksCSS from '../../../Styles/db_books.module.css';

export default function BooksList() {

    // ====== data ====== //

    const books = FakeDataBooks;

    return <React.Fragment>

        <div className={titleCSS.container}>

            <div className={titleCSS.title}>

                <div className={titleCSS.title_box}>

                    <PiBooksFill />
                    <p>Books</p>

                </div>

                <div className={titleCSS.actions}>

                    <Link to={'add'}>Add Book</Link>

                </div>

            </div>

            <div className={booksCSS.container}>

                {books.map( book => <BookCard key={book._id} book={book} />)}

            </div>

        </div>

    </React.Fragment>

}
