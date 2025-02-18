import { Outlet } from '@tanstack/react-router'
import AppLayout from './AppLayout'

const AuthedLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}

export default AuthedLayout