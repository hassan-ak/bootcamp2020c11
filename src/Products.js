import React from 'react'
import { Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <div>
            Products Home
            <br/>
            <Outlet>
                
            </Outlet>
        </div>
    )
}
