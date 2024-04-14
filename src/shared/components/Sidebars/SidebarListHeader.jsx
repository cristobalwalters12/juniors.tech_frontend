import { AccordionHeader, ListItem, Typography } from '@material-tailwind/react'

const SidebarListHeader = ({
  selected,
  label,
  icon,
  onClick: handleClick,
  className
}) => {
  return (
    <ListItem className="p-0" selected={selected}>
      <AccordionHeader onClick={handleClick} className="border-b-0 p-3 transition-all bg-accent-dark  hover:bg-accent-dhover focus:bg-accent-dhover focus:text-accent-light  hover:text-accent-light active:text-accent-light focus:opacity-80 hover:opacity-95 active:opacity-80 tracking-wide shadow-md">
        <Typography variant="h2" color="blue-gray" className={`flex gap-2 text-grey-light text-[1rem] ${className || ''}`}>
          {icon} {label}
        </Typography>
      </AccordionHeader>
    </ListItem>
  )
}

export default SidebarListHeader
