import React from 'react'
import { useParams } from 'react-router-dom'

export const Products = () => {
    const {productId} = useParams();
    return (
        <div>
            Products Home {productId}
        </div>
    )
}
