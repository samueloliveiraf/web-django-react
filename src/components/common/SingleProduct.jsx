import React from 'react'

const SingleProduct = ({product}) => {
    return (
        <div>
            <h2>{product?.name}</h2>
        </div>
    )
}

export default SingleProduct
