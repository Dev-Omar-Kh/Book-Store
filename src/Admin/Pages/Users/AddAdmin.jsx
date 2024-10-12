import React from 'react';

import titleCSS from '../../../Styles/db_title.module.css';
import formCSS from '../../../Styles/forms.module.css';
import { BsPatchPlusFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function AddAdmin() {

    return <React.Fragment>

        <div className={titleCSS.container}>

            <div className={titleCSS.title}>

                <div className={titleCSS.title_box}>

                    <BsPatchPlusFill />
                    <p>Add Admin</p>

                </div>

            </div>

            <div className={titleCSS.form_cont}>

                <form className={formCSS.form}>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Full Name :</span>
                        </label>
                        <input type="text" placeholder='Enter admin full name' />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Email :</span>
                        </label>
                        <input type="text" placeholder='Enter admin email' />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Phone :</span>
                        </label>
                        <input type="tel" placeholder='Enter admin phone number' />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Password :</span>
                        </label>
                        <input type="password" placeholder='Enter new password' />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Confirm password :</span>
                        </label>
                        <input type="password" placeholder='Confirm the password' />

                    </div>

                    <motion.button whileTap={{scale : 0.95}} className={formCSS.submit} type='submit'>Add Admin</motion.button>

                </form>

            </div>

        </div>

    </React.Fragment>

}
