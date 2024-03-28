import { Textarea } from '@material-tailwind/react'

export function TextEditor ({ id, label, register, registerKey, className, ...props }) {
  return (
    <div className="w-full">
      <Textarea
        id={id}
        variant="outlined"
        placeholder={label}
        rows={4}
        className={`bg-white w-full !border-t-blue-gray-200 focus:!border-t-gray-900 ${className}`}
        labelProps={{
          className: 'before:content-none after:content-none'
        }}
        {...props}
        {...register(registerKey)}
      />
    </div>
  )
}
