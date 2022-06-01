import { Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CardPage from './pages/CardPage'
import ProductPage from './pages/ProductPage'
import ProductSectionPage from './pages/ProductSectionPage'

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductSectionPage />} exact />
      <Route path="/about" element={<AboutPage />} exact />
      <Route path="/card" element={<CardPage />} exact />
      <Route path="/product/:id" element={<ProductPage />} exact />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  )
}

export { useRoutes }
