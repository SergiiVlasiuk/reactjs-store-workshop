import React from 'react'
import { useRoutes } from '../routes'

const Main = () => {
  const routes = useRoutes()
  return (
    <main>
      <div className="container">
        {routes}
      </div>
    </main>
  )
}

export default Main
