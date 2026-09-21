type SidebarLinkProps = {
  label: string
  active?: boolean
}

export default function SidebarLink({ label, active = false }: SidebarLinkProps) {
  const base = 'rounded-lg px-3 py-2 text-sm'
  const state = active
    ? 'bg-brand-50 font-medium text-brand-700'
    : 'text-slate-600 hover:bg-slate-100'

  return (
    <a href="#" className={`${base} ${state}`}>
      {label}
    </a>
  )
}