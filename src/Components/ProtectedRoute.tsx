import type { ReactNode } from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../lib/AuthContext'

type ProtectedRouteProps = {
  allowedRole: 'student' | 'warden'
  children: ReactNode
}

export default function ProtectedRoute({ allowedRole, children }: ProtectedRouteProps) {
  const { session, profile, loading } = useAuth()

  if (loading) {
    return <div className="p-6 text-sm text-slate-500">Loading…</div>
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  if (profile?.role !== allowedRole) {
    return <Navigate to="/unauthorized" replace />
  }

  return <>{children}</>
}