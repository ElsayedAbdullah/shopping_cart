import React from 'react'
import './Products.scss'

const Products = ({products}) => {
  return (
    <div className='products'>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <div className="image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="description">
            <p className="name"><strong>{product.name}</strong></p>
            <span className="price">${product.price}</span>
          </div>
          <div className="text-center">
          <button className="btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products