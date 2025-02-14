import { Outlet } from '@tanstack/react-router'
import AppLayout from './appLayout'
import { ReactNode } from 'react'

const AuthedLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}

export default AuthedLayout