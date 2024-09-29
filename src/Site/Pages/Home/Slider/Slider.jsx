import React, { useEffect, useState } from 'react';

import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

import sliderCSS from './slider.module.css';

export default function Slider({height}) {

    // ====== container-height ====== //

    const [contHeight, setContHeight] = useState(0);

    useEffect(() => {

        if(height){
            setContHeight(height);
        }

    } , [height]);

    return <React.Fragment>

        <div style={{height : `calc(100svh - ${contHeight}px)`}} className={sliderCSS.container}>

            <div className={sliderCSS.arrow}>
                <IoArrowBackSharp />
            </div>

            <div className={sliderCSS.slider_cont}></div>

            <div className={sliderCSS.arrow}>
                <IoArrowForwardSharp />
            </div>

        </div>

    </React.Fragment>

}
