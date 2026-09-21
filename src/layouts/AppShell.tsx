import type { ReactNode } from 'react'

type AppShellProps = {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen bg-slate-50">
      <aside className="hidden w-60 flex-col border-r border-slate-200 bg-white p-4 md:flex">
        <div className="text-xl font-bold text-brand-600">Dormly</div>
        <nav className="mt-8 flex flex-col gap-1">
          <a href="#" className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700">
            Dashboard
          </a>
          <a href="#" className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
            Room
          </a>
          <a href="#" className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
            Meals
          </a>
          <a href="#" className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
            Complaints
            </a>
            <a href="#" className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
            Leave
            </a>
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