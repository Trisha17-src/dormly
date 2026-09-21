import Table from '../Components/Table'
import StatusBadge from '../Components/StatusBadge'
import type { Status } from '../Components/StatusBadge'

const complaints: {
  id: number
  title: string
  category: string
  date: string
  status: Status
}[] = [
  { id: 1, title: 'Wi-Fi not working in room', category: 'Wi-Fi', date: '12 Sep 2026', status: 'in_progress' },
  { id: 2, title: 'Broken window latch', category: 'Maintenance', date: '10 Sep 2026', status: 'open' },
  { id: 3, title: 'Water leakage in bathroom', category: 'Water', date: '02 Sep 2026', status: 'resolved' },
]

export default function ComplaintsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Complaints</h1>
      <p className="mt-1 text-slate-500">Track the status of your complaints.</p>

      <div className="mt-6">
        <Table headers={['Title', 'Category', 'Date', 'Status']}>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td className="px-4 py-3 text-slate-900">{c.title}</td>
              <td className="px-4 py-3 text-slate-600">{c.category}</td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-600">{c.date}</td>
              <td className="px-4 py-3">
                <StatusBadge status={c.status} />
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  )
}