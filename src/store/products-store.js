import { makeAutoObservable } from 'mobx'

class ProductItems {
  products = [
    { id: 1, image: window.location.origin + '/images/tmp/01.png', price: '₴184.21' },
    { id: 2, image: '/images/tmp/02.png', price: '₴311.21' },
    { id: 3, image: '/images/tmp/03.png', price: '₴221.21' },
    { id: 4, image: '/images/tmp/04.png', price: '₴91.21' },
    { id: 5, image: '/images/tmp/05.png', price: '₴221.21' },
    { id: 6, image: '/images/tmp/06.png', price: '₴131.21' },
    { id: 7, image: '/images/tmp/07.png', price: '₴161.21' },
    { id: 8, image: '/images/tmp/08.png', price: '₴101.21' },
    { id: 9, image: '/images/tmp/09.png', price: '₴109.21' },
  ]

  constructor() {
    makeAutoObservable(this, {}, { deep: true })
    // makeAutoObservable(this)
  }

  findById(id) {
    // return this.products.filter(product => product.id === id)
    return this.products.find(product => product.id === id)
  }
}

export default new ProductItems()
