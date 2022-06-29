import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const { id, image, price } = product
  return (
    <div className="product-list__item">
      <Link to={`/product/${id}`} className='product-list__item_item'>
        <img src={image} alt="" className="product-list__item__image" />
        <div className="product-list__item__title">{id}. product</div>
        <div className="product-list__item__price">{price}</div>
      </Link>
    </div>
  )
}

export default Product
