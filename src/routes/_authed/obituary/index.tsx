import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/obituary/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        Hello "/_authed/obituary/"!
        //list of obituary page, with search bar 
    </div>
  )
}
