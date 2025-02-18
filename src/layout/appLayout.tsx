import NavBar from "@/components/navBar/NavBar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // pass sidebar routes props if user or admin
  return (
    <div className="w-full h-full">
      <NavBar/>
      <main className="h-[90vh]">
        {children}
      </main>
    </div>
  )
}


// tailwind to calculate the h- of the main