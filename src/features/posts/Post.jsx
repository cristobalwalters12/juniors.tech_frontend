import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { useNavigate } from 'react-router-dom'
import { CustomCardFooter } from '../../shared/components/Cards/CustomCardFooter'
import ContextMenu from '../../shared/components/Cards/ContextMenu'
import { useDeletePost } from './useDeletePost'
import { toast } from 'react-toastify'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { useVoteOnPost } from './useVoteOnPost'
import UserAvatar from '../../shared/components/UserAvatar'

const Post = ({ post, onShowReplies, diableReplyButton }) => {
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
  return (
    <article>
      <Card
        color="transparent"
        shadow={false}
        className="w-full pl-2 pt-2 pr-6"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex justify-between pt-0 pb-2"
        >
          <div className='flex items-center gap-2'>
            <Button variant='text' className='rounded-full p-0 w-14 h-10 flex items-center justify-center' onClick={() => navigate(-1)}>
              <ArrowLeftIcon className='h-4 w-4' />
            </Button>
            <span className="rounded-full p-0 flex items-center">
              <UserAvatar avatarUrl={post.avatarUrl} size="sm" className="m-0" />
            </span>
            <div className="flex w-full flex-col">
              <Typography variant="paragraph" color="black" className='font-semibold'>
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
          <div className='flex items-start'>
            <ContextMenu
              ownerId={post.authorId}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onReport={handleReport}
            />
          </div>
        </CardHeader>
        <CardBody className="mb-2 mt-4 p-0 flex flex-col gap-2">
          <Typography variant='h4' className='text-blue-gray-900 mb-2'>{post.title}</Typography>
          <Typography className='font-normal text-md mb-3'>{post.body}</Typography>
        </CardBody>
        <CustomCardFooter
          post={post}
          onReply={onShowReplies}
          disableReply={diableReplyButton}
          onVote={handleVote}
          onReport={handleReport}
          onDelete={handleDelete}
        />
      </Card>
    </article>
  )
}

export { Post }
