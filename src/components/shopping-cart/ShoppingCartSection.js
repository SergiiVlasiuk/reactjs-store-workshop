import './ShoppingCartSection.css'
import { observer } from 'mobx-react-lite'
import ShoppingCartDetails from './ShoppingCartDetails'
import cart from '../../store/cart-store'

const ShoppingCartSection = () => {
  return (
    <section className='shopping-cart__product-section shopping-cart__products'>
      {Array.from(cart.carts.keys()).map(productId => (<ShoppingCartDetails productId={productId} key={productId} />))}
    </section>
  )
}

export default observer(ShoppingCartSection)
// export default ShoppingCartSection
