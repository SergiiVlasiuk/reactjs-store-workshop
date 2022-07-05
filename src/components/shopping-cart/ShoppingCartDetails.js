import './ShoppingCartDetails.css'
import cart from '../../store/cart-store'
import MyButton from '../ui/MyButton'
import MyInput from '../ui/MyInput'

const ShoppingCartDetails = ({ productId }) => {
  const productCart = cart.cartByProductId(productId)
  const { product, count } = productCart
  const { title, price } = product
  const deleteFromCards = () => cart.delete(productId)
  function onBlur(event) {
    console.log('onBlur: ', event.target.value)
    try {
      const evalue = +(event.target.value)
      cart.setCount(productId, evalue)
    } catch (e) {
      deleteFromCards()
    }
  }
  console.log('[ShoppingCartDetails]')
  return (
    <>
      <div className="shopping-cart__product-title">{title}</div>
      <MyInput value={count} onBlur={onBlur}></MyInput>
      <MyButton className="shopping-cart__product-delete" onClick={deleteFromCards}>Delete</MyButton>
      <div className="shopping-cart__product-price">{price}</div>
    </>
  )
}

export default ShoppingCartDetails
