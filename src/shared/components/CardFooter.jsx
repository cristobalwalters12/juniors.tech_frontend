import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react'
import {
  FlagIcon,
  PencilIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisVerticalIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ShareIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

const CardFooter = ({
  voteDirection,
  voteCount,
  commentCount,
  owner,
  className,
  openReplyForm,
  showEditingForm,
  handleDelete
}) => {
  return (
    <div className={`mt-1 flex items-center ${className}`}>
      <div className="flex items-center gap-1">
        <Button variant="text" className="rounded-full p-1.5">
          <ArrowUpIcon className={`h-4 w-4 ${voteDirection === 1 ? 'text-blue-600' : ''}`} />
        </Button>
        <Typography
          color="gray"
          className="text-xs font-normal text-blue-gray-500"
        >
          {voteCount}
        </Typography>
        <Button variant="text" className="rounded-full p-1.5">
          <ArrowDownIcon className={`h-4 w-4 ${voteDirection === -1 ? 'text-blue-600' : ''}`} />
        </Button>
      </div>
        <Button variant="text" className="rounded-full py-1.5 px-2.5" onClick={openReplyForm}>
          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftIcon className="h-4 w-4" />
            <Typography
              color="gray"
              className="text-xs font-normal text-blue-gray-500"
            >
              {commentCount}
            </Typography>
          </div>
        </Button>
        <Button variant="text" className="rounded-full py-1.5 px-2.5">
          <div className="flex items-center gap-1">
            <ShareIcon className="h-4 w-4" />
            <Typography
              color="gray"
              className="text-xs font-normal text-blue-gray-500 capitalize"
            >
              Share
            </Typography>
          </div>
        </Button>
        <Menu>
          <MenuHandler>
            <Button variant="text" className="rounded-full p-1.5">
              <EllipsisVerticalIcon className="h-4 w-4" />
            </Button>
          </MenuHandler>
          <MenuList className='p-0'>
            {owner
              ? <>
                <MenuItem className='p-3 flex items-center gap-2' onClick={showEditingForm}>
                  <PencilIcon className="h-4 w-4" />
                  Editar
                </MenuItem>
                <MenuItem className='p-3 flex items-center gap-2' onClick={handleDelete}>
                  <TrashIcon className="h-4 w-4" />
                  Eliminar
                </MenuItem>
              </>
              : <MenuItem className='p-3 flex items-center gap-2'>
                  <FlagIcon className="h-4 w-4" />
                  Reportar
                </MenuItem>
            }
          </MenuList>
        </Menu>
    </div>
  )
}

export { CardFooter }
