import React from 'react';
import Products from '../../../../Components/Site/Products/Products';
import { Link } from 'react-router-dom';
import FakeDataBooks from '../../../../FakeDataBooks';

import { IoMdArrowRoundForward } from 'react-icons/io';

import commonCSS from '../../../../Styles/home_common.module.css'

export default function Offers() {

    const data = FakeDataBooks.filter(book => book.offer)

    return <React.Fragment>

        <div className={commonCSS.container}>

            <div className={commonCSS.title}>

                <span className={commonCSS.line}></span>

                <h3>Latest Offers</h3>

                <span className={commonCSS.line}></span>

            </div>

            <Products data={data} />

            <div className={commonCSS.link}>

                <Link>
                    <p>View more offers</p>
                    <IoMdArrowRoundForward />
                </Link>

            </div>

        </div>

    </React.Fragment>

}
