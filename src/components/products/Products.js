import './Products.css'
import Product from './Product'
import store from '../../store/products-store'

const Products = () => {

  return (
    <>
      {store.products.map((item, idx) => <Product product={item} key={item.id} />)}
    </>
  )
}

export default Products
