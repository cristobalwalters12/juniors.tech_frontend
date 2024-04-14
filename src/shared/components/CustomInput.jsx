const CustomInput = ({ placeholder, size = 'lg', type = 'text', className, ...props }) => {
  const classNames = `peer
  w-full
  h-full
  px-3
  py-2.5
  font-sans
  font-normal
  text-sm
  text-gray-900
  outline
  outline-0
  disabled:bg-blue-gray-50
  disabled:border-0
  disabled:cursor-not-allowed
  placeholder-shown:border
  placeholder-shown:border-blue-gray-200
  placeholder-shown:border-t-blue-gray-200
  placeholder:opacity-0
  placeholder:text-gray-500
  placeholder:opacity-100
  focus:outline-0
  focus:placeholder:opacity-100
  focus:!border-primary-light
  focus:ring-primary-light/50
  transition-all
  !border
  !border-gray-dark/10
  rounded-[7px]
  bg-white/40
  shadow-lg
  shadow-blue-gray-900/5
  ring-4
  ring-transparent
  ${className || ''}`
  return (
    <input
      className={classNames}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default CustomInput
