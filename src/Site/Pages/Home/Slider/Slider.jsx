import React, { useEffect, useState } from 'react';

import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

import sliderCSS from './slider.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import FakeDataBooks from '../../../../FakeDataBooks';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

export default function Slider({height}) {

    // ====== fake-data-books ====== //

    const books = FakeDataBooks.slice(0 , 6);

    const [currentBookID, setCurrentBookID] = useState(0);

    const handleNextBook = () => {

        setCurrentBookID(currentId => currentId === books.length - 1 ? 0 : currentId + 1);

    }

    const handlePrevBook = () => {

        setCurrentBookID(prevId => prevId === 0 ? books.length - 1 : prevId - 1);

    }

    useEffect(() => {
        
        books.forEach(book => {

            const img = new Image();
            img.src = book.imageURL;

        });

        const interval = setInterval(() => {
            setCurrentBookID(currentId => currentId === books.length - 1 ? 0 : currentId + 1);
        }, 8000);

        return () => clearInterval(interval);

    }, [books]);

    // ====== container-height ====== //

    const [contHeight, setContHeight] = useState(0);

    useEffect(() => {

        if(height){
            setContHeight(height);
        }

    } , [height]);

    // ====== framer-motion ====== //

    const parentVariants = {

        hidden : {opacity: 0},
        visible: {opacity : 1 , transition: {duration: 0.3}},
        exit : {opacity: 0 , transition: {duration : 0.3}}

    };

    const toBottomVariants = {

        hidden : {opacity: 0 , y: -20},
        visible : {opacity: 1 , y: 0 , transition: {duration : 0.3}} ,
        exit : {opacity: 0 , y: -20 , transition: {duration : 0.3}}

    }

    const toTopVariants = {

        hidden : {opacity: 0 , y: 20},
        visible : {opacity: 1 , y: 0 , transition: {duration : 0.3}} ,
        exit : {opacity: 0 , y: 20 , transition: {duration : 0.3}}

    }

    return <React.Fragment>

        <div style={{height : `calc(100svh - ${contHeight}px)`}} className={sliderCSS.container}>

            <motion.div onClick={handlePrevBook} whileTap={{scale : 0.90}} className={sliderCSS.arrow}>
                <IoArrowBackSharp />
            </motion.div>

            <AnimatePresence>

                <div className={sliderCSS.slider_cont}>

                    <motion.div 
                        key={currentBookID}
                        variants={parentVariants} initial='hidden' animate='visible' exit={'exit'}  
                        className={sliderCSS.slider_box}
                    >

                        <motion.div variants={toBottomVariants} className={sliderCSS.box_content}>

                            <h3>{books[currentBookID].bookTitle}</h3>

                            <p>{books[currentBookID].bookDescription}</p>

                            <Link>
                                Show more
                                <IoIosArrowForward />
                            </Link>

                        </motion.div>

                        <motion.div variants={toTopVariants} className={sliderCSS.box_img}>

                            <img src={books[currentBookID].imageURL} alt="" />

                        </motion.div>

                    </motion.div>

                </div>

            </AnimatePresence>

            <motion.div onClick={handleNextBook} whileTap={{scale : 0.90}} className={sliderCSS.arrow}>
                <IoArrowForwardSharp />
            </motion.div>

        </div>

    </React.Fragment>

}
