import React from 'react'
import { Link } from 'react-router-dom';

import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';

import productsCSS from '../../../Styles/products.module.css';

export default function Products({data}) {

    // console.log(data);

    return <React.Fragment>

        <div className={productsCSS.container}>

            {data.map((book , idx) => <div key={idx} className={productsCSS.pro_card}>

                <div className={productsCSS.actions}>

                    <span className={productsCSS.action_icon}><IoCartOutline /></span>
                    <span className={productsCSS.action_icon}><IoHeartOutline /></span>

                </div>

                <Link>
                
                    <div className={productsCSS.pro_img}>

                        <img className={productsCSS.pro_img_img} src={book.imageURL} alt={book.bookTitle} />

                    </div>

                    <div className={productsCSS.pro_det}>

                        <div className={productsCSS.main_det}>

                            <h3 className={productsCSS.h3}>{book.bookTitle}</h3>
                            <p className={productsCSS.author}>"{book.authorName}"</p>

                        </div>

                        <p className={productsCSS.some_about}>{book.bookDescription.split(' ').slice(0 , 10).join(' ') + '...'}</p>

                        <p className={productsCSS.price}>10000 <span>EGP</span></p>

                    </div>
                
                </Link>

            </div>)}

        </div>

    </React.Fragment>

}
