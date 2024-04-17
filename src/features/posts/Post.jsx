import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react'
import {
  ArrowLeftIcon, DocumentTextIcon, EllipsisVerticalIcon, FlagIcon, PencilIcon, TrashIcon
} from '@heroicons/react/24/outline'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'
import { CustomCardFooter } from '../../shared/components/Cards/CustomCardFooter'

const Post = ({ post }) => {
  const currUserId = useAuthStore((state) => state.id)
  const owner = post.authorId === currUserId
  const navigate = useNavigate()
  const handleVote = () => {}
  const handleShare = () => {}
  const handleReport = () => {}
  const handleDelete = () => {}
  const handleShowReplies = () => {}

  return (
    <article className='pl-4 pb-3'>
      <Card color="transparent" shadow={false} className="w-full">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex justify-between pt-0 pb-2"
        >
          <div className='flex items-center gap-2'>
            <Button variant='text' className='rounded-full p-3'>
              <ArrowLeftIcon className='h-4 w-4' />
            </Button>
            <span className="rounded-full border border-white/20 bg-blue-gray-50 p-2">
              <DocumentTextIcon className='h-5 text-blue-gray-500' />
            </span>
            <div className="flex w-full flex-col">
              <Typography variant="paragraph" color="blue-gray" className='font-semibold'>
                {post.category}
              </Typography>
              <div className="flex items-center gap-1.5">
                <Typography variant="small" color="blue-gray" className='font-normal'>
                  {post.authorUsername}
                </Typography>
                <span className='font-semibold'>&middot;</span>
                <Typography variant="small" color="blue-gray" className='font-normal'>
                  <FormattedDate date={post.createdAt} />
                </Typography>
                {post.updatedAt && <Typography variant='small' color="blue-gray" className='font-normal'>
                  <span> &middot; (Editado) </span>
                  <FormattedDate date={post.updatedAt} />
                </Typography>}
              </div>
            </div>
          </div>
          <Menu>
            <MenuHandler>
              <div className="flex items-center">
                <Button variant="text" className="rounded-full p-1.5">
                  <EllipsisVerticalIcon className="h-4 w-4" />
                </Button>
              </div>
            </MenuHandler>
            <MenuList className='p-0'>
              {owner
                ? <>
                  <MenuItem className='p-3 flex items-center gap-2' onClick={() => navigate(`/posts/${post.id}/edit`)}>
                    <PencilIcon className="h-4 w-4" />
                    Editar
                  </MenuItem>
                  <MenuItem className='p-3 flex items-center gap-2' onClick={() => console.log('Eliminar')}>
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
        </CardHeader>
        <CardBody className="mb-2 p-0 flex flex-col gap-2">
          <Typography variant='h4'>{post.title}</Typography>
          <Typography>{post.body}</Typography>
        </CardBody>
        <CustomCardFooter
          post={post}
          onShowReplies={handleShowReplies}
          onVote={handleVote}
          onShare={handleShare}
          onReport={handleReport}
          onDelete={handleDelete}
        />
      </Card>
    </article>
  )
}

export { Post }
