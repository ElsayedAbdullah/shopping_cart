import React from 'react'
import ReactModal from 'react-modal'

const ProductModal = ({product, closeModal}) => {
  return (
    <ReactModal isOpen={product} onRequestClose={closeModal}>
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="product-info text-center">
          <img src={product.imageUrl} alt="" />
          <h3 className="name">{product.name}</h3>
          <p className="desc" style={{margin: "10px 0"}}>{product.desc}</p>
          <p className="price"><strong>${product.price}</strong></p>
        </div>
      </ReactModal>
  )
}

export default ProductModal