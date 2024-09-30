import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './../Components/Site/Site-Header/Header';

export default function SiteLayout() {

    const [headerHeight, setHeaderHeight] = useState(0);

    return <React.Fragment>

        <Header height={setHeaderHeight} />

        <Outlet context={headerHeight} />

    </React.Fragment>

}
