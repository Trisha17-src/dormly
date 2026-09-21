import type { ReactNode } from 'react'

type CardProps = {
  title?: string
  children: ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="rounded-card border border-slate-200 bg-white p-5">
      {title && <h2 className="mb-3 text-sm font-medium text-slate-500">{title}</h2>}
      {children}
    </section>
  )
}