import { Outlet } from 'react-router'
import SidebarLink from '../Components/SidebarLink'
import { useAuth } from '../lib/AuthContext'

const studentNavItems = [
  { label: 'Dashboard', to: '/student/dashboard' },
  { label: 'Room', to: '/student/room' },
  { label: 'Meals', to: '/student/meals' },
  { label: 'Complaints', to: '/student/complaints' },
  { label: 'Leave', to: '/student/leave' },
  { label: 'Announcements', to: '/student/announcements' },
]

const wardenNavItems = [
  { label: 'Dashboard', to: '/warden/dashboard' },
  { label: 'Students', to: '/warden/students' },
  { label: 'Rooms', to: '/warden/rooms' },
  { label: 'Complaints', to: '/warden/complaints' },
]

export default function AppShell() {
  const { profile } = useAuth()
  const navItems = profile?.role === 'warden' ? wardenNavItems : studentNavItems

  return (
    <div className="flex h-screen bg-slate-50">
      <aside className="hidden w-60 flex-col border-r border-slate-200 bg-white p-4 md:flex">
        <div className="text-xl font-bold text-brand-600">Dormly</div>
        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <SidebarLink key={item.to} label={item.label} to={item.to} />
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
          <span className="text-sm text-slate-500">Welcome back</span>
          <span className="text-sm font-medium text-slate-900">Trisha</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}