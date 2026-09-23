import { Link } from 'react-router'
import Button from '../Components/Button'

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-50 p-6 text-center">
      <h1 className="text-xl font-semibold text-slate-900">You don't have access to this page</h1>
      <p className="text-sm text-slate-500">
        This section isn't available for your account type.
      </p>
      <Link to="/">
        <Button className="mt-2">Back to dashboard</Button>
      </Link>
    </div>
  )
}