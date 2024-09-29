import React from 'react';

import sponsorsCSS from './sponsors.module.css';
import SponsorsData from './SponsorsData';

export default function Sponsors() {


    return <React.Fragment>

        <div className={sponsorsCSS.container}>

            {SponsorsData.map((sponsor , idx) =>  <div key={idx} className={sponsorsCSS.sponsors_card}>
                <img src={sponsor.img} alt="" />
            </div>)}

        </div>

    </React.Fragment>

}
