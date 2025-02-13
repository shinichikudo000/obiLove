import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/obituary_/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        Hello "/obituary_/$id/"!
        // obituary Page
        // getting the page data before load with tanstack query, skeleton
    </div>
  )
}
