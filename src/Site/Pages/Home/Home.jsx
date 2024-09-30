import React from 'react'
import Slider from './Slider/Slider'
import { useOutletContext } from 'react-router-dom'
import Sponsors from './Sponsors/Sponsors';
import Featured from './Featured-Books/Featured';

export default function Home() {

    const height = useOutletContext();

    return <React.Fragment>

        <Slider height={height} />

        <Sponsors />

        <Featured />

    </React.Fragment>

}
