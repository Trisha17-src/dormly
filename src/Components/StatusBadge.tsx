export type Status =
  | 'open'
  | 'in_progress'
  | 'resolved'
  | 'pending'
  | 'approved'
  | 'rejected'

const styles: Record<Status, { label: string; classes: string }> = {
  open: { label: 'Open', classes: 'bg-red-50 text-red-700' },
  in_progress: { label: 'In progress', classes: 'bg-amber-50 text-amber-700' },
  resolved: { label: 'Resolved', classes: 'bg-green-50 text-green-700' },
  pending: { label: 'Pending', classes: 'bg-amber-50 text-amber-700' },
  approved: { label: 'Approved', classes: 'bg-green-50 text-green-700' },
  rejected: { label: 'Rejected', classes: 'bg-red-50 text-red-700' },
}

export default function StatusBadge({ status }: { status: Status }) {
  const { label, classes } = styles[status]

  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${classes}`}>
      {label}
    </span>
  )
}