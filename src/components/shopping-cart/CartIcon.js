import './CartIcon.css'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  return (
    <Link to='/cart' className='header__link shopping-icon'>
      <span className='shopping-cart__notifications'>2</span>
      <HiOutlineShoppingCart size={'1.6em'} />
    </Link>
  )
}

export default CartIcon
