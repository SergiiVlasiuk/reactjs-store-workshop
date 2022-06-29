import { Link } from 'react-router-dom'
import CartIcon from './shopping-cart/CartIcon'

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to='/' className='header__link'>
          <h1>Header</h1>
        </Link>
        {/* <Link to='/' className='product-list__item_item header__link'>
          <h1>Header</h1>
        </Link> */}
        {/* <Link to='/' className='product-list__item_item' > */}
        {/* <h1 className="header__link">Header</h1> */}
        {/* </Link> */}
        <CartIcon />
      </div>
    </header>
  )
}

export default Header
