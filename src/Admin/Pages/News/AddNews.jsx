import React from 'react';

import { BsPatchPlusFill } from 'react-icons/bs';

import formCSS from '../../../Styles/forms.module.css';
import titleCSS from '../../../Styles/db_title.module.css';
import { motion } from 'framer-motion';

export default function AddNews() {

    return <React.Fragment>

        <div className={titleCSS.container}>

            <div className={titleCSS.title}>

                <div className={titleCSS.title_box}>

                    <BsPatchPlusFill />
                    <p>Add News</p>

                </div>

            </div>

            <div className={formCSS.form_cont}>

                <form className={formCSS.form} style={{padding: 0}}>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>News Title :</span>
                        </label>
                        <input type="text" placeholder='Enter the news title' />

                    </div>

                    <div className={formCSS.input_cont}>

                        <label htmlFor="">
                            <span className={formCSS.label}>News Content :</span>
                        </label>
                        <textarea name="" id="" placeholder="Enter the news content"></textarea>

                    </div>

                    <motion.button whileTap={{scale : 0.95}} className={formCSS.submit} type='submit'>Add Book</motion.button>

                </form>

            </div>

        </div>

    </React.Fragment>

}
