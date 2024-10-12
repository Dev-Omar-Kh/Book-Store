import React from 'react';
import { motion } from 'framer-motion';

import { LuImagePlus } from 'react-icons/lu';
import { BsPatchPlusFill } from 'react-icons/bs';

import formCSS from '../../../Styles/forms.module.css';
import titleCSS from '../../../Styles/db_title.module.css';

export default function AddBook() {

    return <React.Fragment>

        <div className={titleCSS.container}>

            <div className={titleCSS.title}>

                <div className={titleCSS.title_box}>

                    <BsPatchPlusFill />
                    <p>Add Book</p>

                </div>

            </div>

            <div className={formCSS.form_cont}>

                <form className={formCSS.form} style={{padding: 0}}>

                    <div className={formCSS.input_cont}>

                        {/* <div className={formCSS.book_img_view}>
                        </div> */}

                        <label htmlFor="book_img" className={formCSS.file_span}>
                            <p>
                                <LuImagePlus />
                                Select the book image
                            </p>
                        </label>
                        <input id='book_img' className={formCSS.book_img} type="file" />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Book Name :</span>
                        </label>
                        <input type="text" placeholder='Enter the book email' />

                    </div>

                    <div className={`${formCSS.input_cont} ${formCSS.half_input_cont}`}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Book Author :</span>
                        </label>
                        <input type="text" placeholder="Enter the book's author name" />

                    </div>

                    <div className={`${formCSS.input_cont} ${formCSS.half_input_cont}`}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Book Category :</span>
                        </label>
                        <input type="text" placeholder="Enter the book's category" />

                    </div>

                    <div className={`${formCSS.input_cont} ${formCSS.half_input_cont}`}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Book Price :</span>
                        </label>
                        <input type="text" placeholder="Enter the book's price" />

                    </div>

                    <div className={`${formCSS.input_cont} ${formCSS.half_input_cont}`}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Book Offer :</span>
                        </label>
                        <input type="text" placeholder="Enter the book's offer" />

                    </div>

                    <div className={formCSS.input_cont}>

                        <label htmlFor="">
                            <span className={formCSS.label}>Book Description :</span>
                        </label>
                        <textarea name="" id="" placeholder="Enter the book's description"></textarea>

                    </div>

                    <motion.button whileTap={{scale : 0.95}} className={formCSS.submit} type='submit'>Add Book</motion.button>

                </form>

            </div>

        </div>

    </React.Fragment>

}
