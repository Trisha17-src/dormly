import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'

type Errors = { email?: string; password?: string }

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Errors>({})

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

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return
    console.log('Form is valid. Would sign in as:', email)
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
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}