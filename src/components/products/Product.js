import React from 'react'

const Product = ({ product }) => {
  const { id, image, price } = product
  return (
    <div className="product-list__item">
      <a href="/" className='product-list__item_item'>
        <img src={image} alt="" className="product-list__item__image" />
        <div className="product-list__item__title">{id}. product</div>
        <div className="product-list__item__price">{price}</div>
      </a>
    </div>
  )
}

export default Product
