import { Button } from '@material-tailwind/react'
import React from 'react'

const RoundedIconButton = ({ icon, onClick: handleClick, className, variant }) => {
  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={`w-10 h-10 p-0 rounded-full flex items-center justify-center ${className || ''}`}>
      {React.createElement(icon, {
        className: 'h-5 w-5',
        strokeWidth: 3
      })}
    </Button>
  )
}

export default RoundedIconButton
