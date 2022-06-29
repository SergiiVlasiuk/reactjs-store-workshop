import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import store from '../../store/products-store'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    setProduct(store.findById(+id))
    // setProduct(store.products.find(product => product.id == id))
  }, [id])
  const { price, image } = product
  return (
    <section className="product-detail">
      <div>
        Product Page: {id}
      </div>
      <div>Price: {price}</div>
      <div>Image: {image}</div>
    </section>
  )
}

export default observer(ProductDetail)
