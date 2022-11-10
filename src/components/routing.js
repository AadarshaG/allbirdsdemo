import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexHome from './front/home/index-component'
import MainComponent from './front/layout/main-component'
import Login from './front/Login/login.component'
import { Rerun } from './front/Rerun/rerun.component'
import { Shops } from './front/Shops/shops.component'
import { SingleProduct } from './front/SingleProduct/singleproduct.component'

function AppRouting(){

    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<MainComponent></MainComponent>}>
                    <Route index element={<IndexHome></IndexHome>}></Route>
                    <Route path="/shops" element={<Shops></Shops>}></Route>
                    <Route path="/shops/single" element={<SingleProduct></SingleProduct>}></Route>

                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/rerun" element={<Rerun></Rerun>}></Route>
                    <Route path="/stores" element=""></Route>
                </Route>

                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting