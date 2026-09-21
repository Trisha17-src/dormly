import type { ReactNode } from 'react'
import SidebarLink from '../Components/SidebarLink'

const navItems = ['Dashboard', 'Room', 'Meals', 'Complaints', 'Leave', 'Announcements']

type AppShellProps = {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen bg-slate-50">
      <aside className="hidden w-60 flex-col border-r border-slate-200 bg-white p-4 md:flex">
        <div className="text-xl font-bold text-brand-600">Dormly</div>
        <nav className="mt-8 flex flex-col gap-1">
          <nav className="mt-8 flex flex-col gap-1">
  {navItems.map((item) => (
    <SidebarLink key={item} label={item} active={item === 'Meals'} />
  ))}
</nav>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
          <span className="text-sm text-slate-500">Welcome back</span>
          <span className="text-sm font-medium text-slate-900">Trisha</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}