import { useId } from 'react'
import type { ComponentProps } from 'react'

type TextInputProps = ComponentProps<'input'> & {
  label: string
  error?: string
}

export default function TextInput({ label, error, id, ...props }: TextInputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        {...props}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-600 ${
          error ? 'border-red-500' : 'border-slate-300'
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}