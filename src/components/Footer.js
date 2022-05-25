import React from 'react'
import CountrySelector from './CountrySelector'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__copyright">
          © MyStore
        </div>
        <CountrySelector />
      </div>
    </footer>
  )
}

export default Footer
