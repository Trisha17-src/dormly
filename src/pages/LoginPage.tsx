import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import { useNavigate, Link } from 'react-router'
import { supabase } from '../lib/supabaseClient'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'

type Errors = { email?: string; password?: string }

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function validate(): Errors {
    const found: Errors = {}
    if (!email.trim()) {
      found.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      found.email = 'Enter a valid email address.'
    }
    if (!password) {
      found.password = 'Password is required.'
    } else if (password.length < 8) {
      found.password = 'Password must be at least 8 characters.'
    }
    return found
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    setSubmitError(null)
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setLoading(true)

    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setLoading(false)
      setSubmitError(signInError.message)
      return
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', signInData.user.id)
      .single()

    setLoading(false)

    if (profileError || !profile) {
      setSubmitError('Signed in, but could not load your profile. Please try again.')
      return
    }

    navigate(profile.role === 'warden' ? '/warden/dashboard' : '/student/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-sm rounded-card border border-slate-200 bg-white p-6">
        <h1 className="text-xl font-semibold text-brand-600">Dormly</h1>
        <p className="mt-1 text-sm text-slate-500">Sign in to your account</p>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <TextInput
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrors((prev) => ({ ...prev, email: undefined }))
            }}
            error={errors.email}
          />
          <TextInput
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setErrors((prev) => ({ ...prev, password: undefined }))
            }}
            error={errors.password}
          />

          {submitError && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {submitError}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-brand-600 hover:text-brand-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}