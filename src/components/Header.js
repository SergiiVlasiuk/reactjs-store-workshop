import { HiOutlineShoppingCart } from 'react-icons/hi'

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="header__link">Header</h1>
        {/* <div className="shopping-icon"><HiOutlineShoppingCart /></div> */}
        <HiOutlineShoppingCart className="shopping-icon" size={'1.6em'} />
      </div>
    </header>
  )
}

export default Header
