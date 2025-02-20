import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/_user/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
    return <div>Hello "/_authed/dashboard"!</div>
}
