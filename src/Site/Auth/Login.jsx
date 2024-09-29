import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BiLogInCircle } from 'react-icons/bi';

import logCSS from './auth.module.css';
import formCSS from '../../Styles/forms.module.css';

export default function Login() {

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

        <div className={logCSS.container}>

            <motion.div variants={parentVariants} initial='hidden' animate='visible' className={logCSS.auth_container}>

                <motion.div variants={toBottomVariants} style={{height : '500px'}} className={logCSS.img_side}>

                    <img src={require('../../Images/auth-bg.jpeg')} alt="" />

                </motion.div>

                <motion.div variants={toTopVariants} className={logCSS.form_cont}>

                    <form className={formCSS.form}>

                        <div className={formCSS.form_title}>

                            <BiLogInCircle className={formCSS.icon} />
                            <p>Log In</p>

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
                                <span className={formCSS.label}>Password :</span>
                            </label>
                            <input type="password" placeholder='Enter the password' />

                        </div>

                        <Link to={'/register'} className={formCSS.form_link}>Don't have an account ?</Link>

                        <motion.button whileTap={{scale : 0.95}} className={formCSS.submit} type='submit'>Log In</motion.button>

                    </form>

                </motion.div>

            </motion.div>

        </div>

    </React.Fragment>

}
