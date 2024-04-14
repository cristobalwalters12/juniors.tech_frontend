import { ListItem } from '@material-tailwind/react'

const SidebarListItem = ({ children, onClick: handleClick, className, selected, ...otherProps }) => {
  return (<ListItem
            className={`text-sm bg-accent-dark transition-all focus:bg-primary-dark hover:bg-primary-dark active:bg-primary-dark focus:text-accent-light  hover:text-accent-light active:text-accent-light focus:opacity-85 hover:opacity-95 active:opacity-85 tracking-wide shadow-md ${className || ''}`}
            onClick={handleClick}
            selected={selected}
            {...otherProps}
            >
              {children}
          </ListItem>)
}

export default SidebarListItem
