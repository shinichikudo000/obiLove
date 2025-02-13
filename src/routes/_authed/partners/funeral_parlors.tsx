import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/partners/funeral_parlors')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/_partners/funeral_parlors"!</div>
}
