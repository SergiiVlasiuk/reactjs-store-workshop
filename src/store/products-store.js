import { makeAutoObservable } from 'mobx'

class ProductItems {
  products = [
    { id: 1, title: 'product-title 1', image: window.location.origin + '/images/tmp/01.png', price: '₴184.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 2, title: 'product-title 2', image: '/images/tmp/02.png', price: '₴311.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 3, title: 'product-title 3', image: '/images/tmp/03.png', price: '₴221.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 4, title: 'product-title 4', image: '/images/tmp/04.png', price: '₴91.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 5, title: 'product-title 5', image: '/images/tmp/05.png', price: '₴221.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 6, title: 'product-title 6', image: '/images/tmp/06.png', price: '₴131.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 7, title: 'product-title 7', image: '/images/tmp/07.png', price: '₴161.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 8, title: 'product-title 8', image: '/images/tmp/08.png', price: '₴101.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
    { id: 9, title: 'product-title 9', image: '/images/tmp/09.png', price: '₴109.21', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae laboriosam alias doloremque pariatur ipsum magnam deserunt placeat rem dolorem? Ipsum in rem vitae accusamus dicta iure illo impedit odio!" },
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
