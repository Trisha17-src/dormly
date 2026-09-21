import { NavLink } from 'react-router'

type SidebarLinkProps = {
  label: string
  to: string
}

export default function SidebarLink({ label, to }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }: { isActive: boolean }) =>
        `rounded-lg px-3 py-2 text-sm ${
          isActive
            ? 'bg-brand-50 font-medium text-brand-700'
            : 'text-slate-600 hover:bg-slate-100'
        }`
      }
    >
      {label}
    </NavLink>
  )
}