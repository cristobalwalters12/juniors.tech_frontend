import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'
import { ArrowLeftIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { useNavigate } from 'react-router-dom'
import { CustomCardFooter } from '../../shared/components/Cards/CustomCardFooter'
import ContextMenu from '../../shared/components/Cards/ContextMenu'
import { useDeletePost } from './useDeletePost'
import { toast } from 'react-toastify'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { useVoteOnPost } from './useVoteOnPost'

const Post = ({ post }) => {
  const navigate = useNavigate()
  const deletePostMutation = useDeletePost()
  const voteOnPostMutation = useVoteOnPost()
  const handleVote = (voteDirection) => {
    voteOnPostMutation
      .mutateAsync({ postId: post.id, voteDirection })
      .catch((err) => {
        showErrorToast(err, 'Error al votar por publicación')
      })
  }

  const handleEdit = () => {
    navigate(`/posts/${post.id}/edit`)
  }

  const handleReport = () => {}

  const handleDelete = () => {
    deletePostMutation.mutateAsync({ postId: post.id }).then(() => {
      navigate('/home')
      toast.success('Publicación eliminada con éxito')
    }).catch((err) => {
      showErrorToast(err, 'Error al eliminar publicación')
    })
  }

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
          <div className='flex items-center'>
            <ContextMenu
              ownerId={post.authorId}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onReport={handleReport}
            />
          </div>
        </CardHeader>
        <CardBody className="mb-2 p-0 flex flex-col gap-2">
          <Typography variant='h4'>{post.title}</Typography>
          <Typography>{post.body}</Typography>
        </CardBody>
        <CustomCardFooter
          post={post}
          onShowReplies={handleShowReplies}
          onVote={handleVote}
          onReport={handleReport}
          onDelete={handleDelete}
        />
      </Card>
    </article>
  )
}

export { Post }
