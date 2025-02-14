import AppSideBar from "../components/appSideBar/AppSideBar"
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // pass sidebar routes props if user or admin
  return (
    <SidebarProvider>
      <AppSideBar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
