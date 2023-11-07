import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <>
      <p>PrivateRoute</p>

      <Outlet />
    </>
  )
}

export default PrivateRoute