import {
  createFileRoute,
  Link,
  Outlet,
  useRouter,
} from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/_authed/_user/partners')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const [activeUrl, setActiveUrl] = useState<string>(
    router.state.location.pathname,
  )
  const items = [
    {
      title: 'All',
      url: '/partners',
    },
    {
      title: 'Funeral Chapels',
      url: '/partners/funeral_chapels',
    },
    {
      title: 'Funeral Parlors',
      url: '/partners/funeral_parlors',
    },
  ]

  return (
    <div>
      <div className="flex">
        {items.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className={`px-4 rounded-full ${activeUrl === item.url ? 'bg-accent' : ''}`}
            onClick={() => setActiveUrl(item.url)}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
