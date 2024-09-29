import React, { useState } from 'react'
import Header from '../Components/Site-Header/Header'
import { Outlet } from 'react-router-dom'

export default function SiteLayout() {

    const [headerHeight, setHeaderHeight] = useState(0);

    return <React.Fragment>

        <Header height={setHeaderHeight} />

        <Outlet context={headerHeight} />

    </React.Fragment>

}
