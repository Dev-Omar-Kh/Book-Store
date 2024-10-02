import React from 'react';

import commonCSS from '../../../../Styles/home_common.module.css'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function Suggestion() {

    return <React.Fragment>

        <div className={commonCSS.container}>

            <div className={commonCSS.title}>

                <span className={commonCSS.line}></span>

                <h3>Most Articles</h3>

                <span className={commonCSS.line}></span>

            </div>

            <div className={commonCSS.link}>

                <Link>
                    <p>View more articles</p>
                    <IoMdArrowRoundForward />
                </Link>

            </div>

        </div>

    </React.Fragment>

}
