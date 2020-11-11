import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export const SelectedProduct = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}
