import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import store from '../../store/products-store'
import cart from '../../store/cart-store'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import MyButton from '../ui/MyButton'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    setProduct(store.findById(+id))
  }, [id])
  const { title, price, image, description } = product
  function addOrder(event) {
    event.stopPropagation()
    cart.addOrder({ ...product })
  }
  return (
    <section className="product-detail">
      <img src={image} alt="" className="product-detail__product" />
      <div className="product-detail__container">
        <h1 className="product-detail__title">
          {title}
        </h1>
        <p className="product-detail__price">Price: {price}</p>
        <p className="product-detail__description">{description}</p>
        {/* <MyButton className="product-detail__button" onClick={() => cart.addOrder({ ...product })}> Add to card</MyButton> */}
        <MyButton className="product-detail__button" onClick={addOrder}> Add to card</MyButton>
      </div>
    </section>
  )
}

export default observer(ProductDetail)
