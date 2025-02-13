import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/obituary')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/obituary"!</div>
}
