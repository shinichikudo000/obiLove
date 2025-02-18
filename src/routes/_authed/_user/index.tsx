import ObituaryCard from '@/components/obituaryCard/ObituaryCard'
import ObituaryForm from '@/components/obituaryForm/ObituaryForm'
import { createFileRoute } from '@tanstack/react-router'
import { useObituaryStore } from '@/store/obituaryStore'

export const Route = createFileRoute('/_authed/_user/')({
  component: RouteComponent,
})

function RouteComponent() {
  const obituaries = useObituaryStore((state) => state.obituaries) 

  return (
    <div className="w-full flex gap-[16px] bg-accent h-full p-[16px]">
      <div className="w-1/4 bg-white h-full">x</div>
      <div className="w-1/2 bg-white h-full p-[16px]">
        <ObituaryForm />
        {/* Map over obituaries and render ObituaryCard */}
        {obituaries.map((obituary) => (
          <ObituaryCard key={obituary.id} obituary={obituary} />
        ))}
      </div>
      <div className="w-1/4 bg-white h-full">sdasdasdasd</div>
    </div>
  )
}
