import React from 'react'
import { Outlet } from 'react-router-dom'
import FrontFooter from '../Footer/footer.component'
import FrontHeader from '../Header/header.component'

import 'bootstrap/dist/css/bootstrap.min.css';

function MainComponent(){

    return(
       <>
        <FrontHeader></FrontHeader>
            <Outlet></Outlet>
        <FrontFooter></FrontFooter>
       </>
    )
}

export default MainComponent