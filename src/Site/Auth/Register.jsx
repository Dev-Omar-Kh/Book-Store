import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BsPatchPlusFill } from 'react-icons/bs';

import regCSS from './auth.module.css';
import formCSS from '../../Styles/forms.module.css';

export default function Register() {

    // ====== framer-motion ====== //

    const parentVariants = {

        hidden : {opacity: 0},
        visible : {opacity: 1 , transition: {duration : 0.3 , }} 

    }

    const toBottomVariants = {

        hidden : {opacity: 0 , y: -20},
        visible : {opacity: 1 , y: 0 , transition: {duration : 0.3}} 

    }

    const toTopVariants = {

        hidden : {opacity: 0 , y: 20},
        visible : {opacity: 1 , y: 0 , transition: {duration : 0.3}} 

    }

    return <React.Fragment>

        <div className={regCSS.container}>

            <motion.div variants={parentVariants} initial='hidden' animate='visible' className={regCSS.auth_container}>

                <motion.div variants={toBottomVariants} className={regCSS.img_side}>

                    <img src={require('../../Images/auth-bg.jpeg')} alt="" />

                </motion.div>

                <motion.div variants={toTopVariants} className={regCSS.form_cont}>

                    <form className={formCSS.form}>

                        <div className={formCSS.form_title}>

                            <BsPatchPlusFill className={formCSS.icon} />
                            <p>Sign Up</p>

                        </div>

                        <div className={formCSS.input_cont}>

                            <div className={formCSS.loader}></div>

                            <label htmlFor="">
                                <span className={formCSS.label}>Full Name :</span>
                            </label>
                            <input type="text" placeholder='Enter your full name' />

                        </div>

                        <div className={formCSS.input_cont}>

                            <div className={formCSS.loader}></div>

                            <label htmlFor="">
                                <span className={formCSS.label}>Email :</span>
                            </label>
                            <input type="text" placeholder='Enter your email' />

                        </div>

                        <div className={formCSS.input_cont}>

                            <div className={formCSS.loader}></div>

                            <label htmlFor="">
                                <span className={formCSS.label}>Phone :</span>
                            </label>
                            <input type="tel" placeholder='Enter your phone number' />

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

                        <Link to={'/login'} className={formCSS.form_link}>Already have an account ?</Link>

                        <motion.button whileTap={{scale : 0.95}} className={formCSS.submit} type='submit'>Sign Up</motion.button>

                    </form>

                </motion.div>

            </motion.div>

        </div>

    </React.Fragment>

}
