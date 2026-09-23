import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import { useNavigate, Link } from 'react-router'
import { Eye, EyeOff, DoorOpen, UtensilsCrossed, MessageSquareWarning } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'

type Errors = { fullName?: string; email?: string; password?: string }
type Role = 'student' | 'warden'

const features: { icon: typeof DoorOpen; text: string }[] = [
  { icon: DoorOpen, text: 'See your room, roommates and vacancy at a glance' },
  { icon: UtensilsCrossed, text: "Check today's menu and rate every meal" },
  { icon: MessageSquareWarning, text: 'Raise a complaint and track it to resolution' },
]

export default function SignupPage() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState<Role>('student')
  const [errors, setErrors] = useState<Errors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function validate(): Errors {
    const found: Errors = {}
    if (!fullName.trim()) found.fullName = 'Full name is required.'
    if (!/^\S+@\S+\.\S+$/.test(email)) found.email = 'Enter a valid email address.'
    if (password.length < 8) found.password = 'Password must be at least 8 characters.'
    return found
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    setSubmitError(null)
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role },
      },
    })
    setLoading(false)

    if (error) {
      setSubmitError(error.message)
      return
    }

    navigate('/')
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Branding panel */}
      <div className="relative hidden w-1/2 overflow-hidden bg-slate-900 lg:flex lg:flex-col lg:justify-between lg:p-12">
        {/* Room-grid motif */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 100 + 4}
                y={row * 100 + 4}
                width="92"
                height="92"
                rx="4"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              />
            ))
          )}
        </svg>

        <div className="relative">
          <span className="text-xl font-bold text-white">Dormly</span>
        </div>

        <div className="relative max-w-sm">
          <h1 className="text-3xl font-semibold leading-snug text-white">
            Everything about your stay, in one place.
          </h1>
          <p className="mt-3 text-slate-400">
            Room, meals, complaints and leave, without the paperwork.
          </p>

          <ul className="mt-10 space-y-4">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 rounded-lg bg-white/10 p-1.5">
                  <Icon size={16} className="text-brand-400" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-slate-500">Student Living, Simplified.</p>
      </div>

      {/* Form panel */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <span className="text-xl font-bold text-brand-600 lg:hidden">Dormly</span>

          <h2 className="mt-6 text-2xl font-semibold text-slate-900">Create your account</h2>
          <p className="mt-1 text-sm text-slate-500">
            Already have one?{' '}
            <Link to="/login" className="font-medium text-brand-600 hover:text-brand-700">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            <TextInput
              label="Full name"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={errors.fullName}
            />

            <TextInput
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <div className="relative">
              <TextInput
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-[34px] text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {!errors.password && (
                <p className="mt-1 text-xs text-slate-400">At least 8 characters.</p>
              )}
            </div>

            <div>
              <span className="block text-sm font-medium text-slate-700">I am a</span>
              <div className="mt-1 grid grid-cols-2 gap-2">
                {(['student', 'warden'] as Role[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setRole(option)}
                    aria-pressed={role === option}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize transition-colors ${
                      role === option
                        ? 'border-brand-600 bg-brand-50 text-brand-700'
                        : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {submitError && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                {submitError}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Creating account…' : 'Create account'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}