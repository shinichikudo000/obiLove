import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/partners/funeral_chapels')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/_partners/funeral_chapels"!</div>
}
