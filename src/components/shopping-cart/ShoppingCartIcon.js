import './ShoppingCartIcon.css'

import { observer } from 'mobx-react-lite'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import cart from '../../store/cart-store'

const ShoppingCartIcon = () => {
  return (
    <Link to='/cart' className='header__link shopping-icon'>
      <span className='shopping-cart__notifications'>{cart.size}</span>
      <HiOutlineShoppingCart size={'1.6em'} />
    </Link>
  )
}

export default observer(ShoppingCartIcon)
