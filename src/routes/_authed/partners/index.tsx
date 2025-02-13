import ObituaryForm from '@/components/obituaryForm/ObituaryForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/partners/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        Hello "/_authed/partners/"!
        <ObituaryForm />
    </div>
    )
}
