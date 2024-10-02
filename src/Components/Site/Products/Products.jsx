import React from 'react'
import { Link } from 'react-router-dom';

import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';

import productsCSS from '../../../Styles/products.module.css';

export default function Products({data}) {

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

                        <div className={productsCSS.prices_box}>
                            {book.offer && <p className={productsCSS.price}>
                                {(book.price - (book.price * (book.offer / 100))).toFixed(2)}
                                <span>EGP</span>
                            </p>}
                            
                            <p className={`${productsCSS.price} ${book.offer ? productsCSS.old_price : ''}`}>
                                {book.price.toFixed(2)} 
                                <span style={{color : book.offer ? 'var(--hash-opacity)' : 'var(--active-color)'}}>EGP</span>
                            </p>
                        </div>

                    </div>
                
                </Link>

            </div>)}

        </div>

    </React.Fragment>

}
