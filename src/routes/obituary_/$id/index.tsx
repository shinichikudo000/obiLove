import AuthedLayout from '@/layout/AuthedLayout'
import PublicLayout from '@/layout/PublicLayout'
import { useAuth } from '@/provider/authProvider'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/obituary_/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  // const { isAuthenticated } = useAuth()
  const { accessToken } = useAuth()
  
  const Layout = accessToken ? AuthedLayout : PublicLayout
  return (
   <Layout />
  )
}
