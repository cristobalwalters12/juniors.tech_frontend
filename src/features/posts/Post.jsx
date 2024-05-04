import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { Link, useNavigate } from 'react-router-dom'
import { CustomCardFooter } from '../../shared/components/Cards/CustomCardFooter'
import ContextMenu from '../../shared/components/Cards/ContextMenu'
import { useDeletePost } from './useDeletePost'
import { toast } from 'react-toastify'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { useVoteOnPost } from './useVoteOnPost'
import UserAvatar from '../../shared/components/UserAvatar'
import ContentViewer from '../../shared/components/TextEditors/ContentViewer'
import { useState } from 'react'

const Post = ({ post, onShowReplies, disableReplyButton }) => {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState(true)
  const deletePostMutation = useDeletePost()
  const voteOnPostMutation = useVoteOnPost()

  const goBackHandler = () => {
    setTimeout(() =>
      navigate(-1)
    , 250)
    setActiveLink(false)
  }

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

  const avatarWidthClassname = post.avatarUrl ? 'w-[3.94rem]' : 'w-[3rem]'

  return (
    <article>
      <Card
        color="transparent"
        shadow={false}
        className="w-full pt-2"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex justify-between pt-0 pb-2"
        >
          <div className='flex items-center gap-2'>
            <div>
            <Button
              variant='text'
              className='rounded-full p-0 w-10 h-10 flex items-center justify-center'
              disabled={!activeLink}
              onClick={goBackHandler}
            >
              <ArrowLeftIcon className='h-4 w-4' />
            </Button>
            </div>
            <Link to={`/users/${post.authorUsername}`}>
              <UserAvatar avatarUrl={post.avatarUrl} className={`${avatarWidthClassname} h-[3rem]`} />
            </Link>
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
          <ContentViewer body={post.body} />
        </CardBody>
        <CustomCardFooter
          post={post}
          onReply={onShowReplies}
          disableReply={disableReplyButton}
          onVote={handleVote}
          onReport={handleReport}
          onDelete={handleDelete}
        />
      </Card>
    </article>
  )
}

export { Post }
