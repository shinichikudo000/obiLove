import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/_user/partners/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_authed/partners/"!
    </div>
  )
}
