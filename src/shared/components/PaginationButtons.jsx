import { IconButton } from '@material-tailwind/react'

const PaginationButtons = ({ currPage, totalPages, maxNumButtons = 5, goToPage }) => {
  const firstPage = 1
  const totalButtons = totalPages >= maxNumButtons ? maxNumButtons : totalPages
  const buttonLabels = [currPage]

  while (buttonLabels.length < totalButtons) {
    const nL = buttonLabels[0]
    const nR = buttonLabels[buttonLabels.length - 1]
    if (nL > firstPage) {
      buttonLabels.unshift(nL - 1)
    }
    if (nR < totalPages) {
      buttonLabels.push(nR + 1)
    }
  }

  if (buttonLabels[0] !== firstPage) {
    buttonLabels[0] = '...'
    buttonLabels.unshift(1)
  }

  if (buttonLabels[buttonLabels.length - 1] !== totalPages) {
    buttonLabels[buttonLabels.length - 1] = '...'
    buttonLabels.push(totalPages)
  }

  return (
    <div className='flex items-center gap-2'>
      {buttonLabels.map((label, index) => {
        if (typeof label === 'number') {
          return (
            <IconButton
              key={label}
              variant={currPage === label ? 'filled' : 'text'}
              color='gray'
              className='rounded-full'
              onClick={() => goToPage(label)}
              >
              {label}
            </IconButton>
          )
        } else {
          return <span key={`dots-${index}`}>...</span>
        }
      })}
    </div>
  )
}

export default PaginationButtons
