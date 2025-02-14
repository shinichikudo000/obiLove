import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/_admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Outlet />
  )
}
