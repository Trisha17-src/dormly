type PlaceholderPageProps = {
  title: string
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-1 text-slate-500">This page is coming soon.</p>
    </div>
  )
}