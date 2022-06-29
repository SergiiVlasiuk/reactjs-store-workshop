import { Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import ProductSectionPage from './pages/ProductSectionPage'

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductSectionPage />} exact />
      <Route path="/about" element={<AboutPage />} exact />
      <Route path="/cart" element={<CartPage />} exact />
      <Route path="/product/:id" element={<ProductPage />} exact />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  )
}

export { useRoutes }
