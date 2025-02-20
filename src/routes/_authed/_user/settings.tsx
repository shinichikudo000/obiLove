import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/_user/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/settings"!</div>
}
