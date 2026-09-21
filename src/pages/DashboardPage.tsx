import Button from '../Components/Button'
import Card from '../Components/Card'
import StatusBadge from '../Components/StatusBadge'
import type { Status } from '../Components/StatusBadge'

const complaints: { id: number; title: string; status: Status }[] = [
  { id: 1, title: 'Wi-Fi not working in room', status: 'in_progress' },
  { id: 2, title: 'Broken window latch', status: 'open' },
  { id: 3, title: 'Water leakage in bathroom', status: 'resolved' },
]

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Room">
          <p className="text-2xl font-semibold text-slate-900">A-203</p>
          <p className="mt-1 text-sm text-slate-500">2 of 3 beds occupied</p>
        </Card>
        <Card title="Today's lunch">
          <p className="text-slate-900">Rajma, rice, salad</p>
        </Card>
        <Card title="Leave status">
          <p className="text-slate-900">No pending requests</p>
        </Card>
      </div>

      <div className="mt-6 flex gap-3">
        <Button>Raise complaint</Button>
        <Button variant="secondary">Rate meal</Button>
        <Button variant="danger">Cancel leave</Button>
      </div>
      <div className="mt-6">
  <Card title="My complaints">
    <ul className="divide-y divide-slate-100">
      {complaints.map((c) => (
        <li key={c.id} className="flex items-center justify-between py-2">
          <span className="text-sm text-slate-900">{c.title}</span>
          <StatusBadge status={c.status} />
        </li>
      ))}
    </ul>
  </Card>
</div>
    </div>
  )
}