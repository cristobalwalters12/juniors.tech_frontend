const PrimaryButton = ({ children, className, onClick: handleClick }) => {
  const baseClassName = 'align-middle select-none font-sans font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-md py-1 px-2 rounded-lg bg-blue-900 text-white shadow-md shadow-blue-300/20 hover:shadow-lg hover:shadow-blue-300/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[1] hover:opacity-[0.85] active:shadow-none'
  return (
    <button
      onClick={handleClick}
      className={`${baseClassName} ${className || ''}`}>
      {children}
    </button>
  )
}

export default PrimaryButton
