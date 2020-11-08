import React from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const {productId} = useParams();
    return (
        <div>
            Product Details {productId}
        </div>
    )
}
