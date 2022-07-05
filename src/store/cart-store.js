import { makeAutoObservable } from 'mobx'

class CartItems {
  carts = new Map()
  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  addOrder(product, count = 1) {
    const resItem = this.carts.get(product.id) || { product, count: 0 }
    this.carts.set(product.id, { ...resItem, count: resItem.count + count })
  }

  cartByProductId(productId) {
    const res = this.carts.get(productId)
    console.log('res: ', res)
    return res
  }

  delete(productId) {
    this.carts.delete(productId)
  }

  setCount(productId, count) {
    console.log(`[setCount] productId: ${productId}; count: ${count}`)
    if (count <= 0 || isNaN(count)) {
      this.delete(productId)
      return
    }
    const product = this.cartByProductId(productId)?.product
    this.delete(productId)
    this.addOrder(product, count)
  }

  get size() {
    return this.carts.size
  }
}

export default new CartItems()
