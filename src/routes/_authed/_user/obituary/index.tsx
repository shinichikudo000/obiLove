import ObituaryForm from '@/components/obituaryForm/ObituaryForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/_user/obituary/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        Hello "/_authed/_user/obituary/"!
        <ObituaryForm />
    </div>
  )
}
