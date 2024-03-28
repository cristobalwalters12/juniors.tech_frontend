import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'
import {
  ArrowLeftIcon, DocumentTextIcon
} from '@heroicons/react/24/outline'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { CardFooter } from '../../shared/components/CardFooter'

const post = {
  id: 1,
  category: 'Hojas de vida',
  author: 'fulano123',
  title: 'Título',
  body: 'Cuerpo de texto completo de la publicación. Cuerpo de texto completo de la publicación. Cuerpo de texto completo de la publicación. Cuerpo de texto completo de la publicación. Cuerpo de texto completo de la publicación.',
  vote_count: -4,
  comment_count: 15,
  created_at: (new Date(2024, 2, 15)).toISOString(),
  updated_at: null,
  vote_direction: -1
}

const Post = () => {
  return (
    <article className='pl-4 pb-3'>
    <Card color="transparent" shadow={false} className="w-full">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-2 pt-0 pb-2"
      >
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
              {post.author}
            </Typography>
            <span className='font-semibold'>&middot;</span>
            <Typography variant="small" color="blue-gray" className='font-normal'>
              <FormattedDate date={post.created_at} />
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-2 p-0 flex flex-col gap-2">
        <Typography variant='h4'>{post.title}</Typography>
        <Typography>{post.body}</Typography>
      </CardBody>
        <CardFooter voteDirection={post.vote_direction} voteCount={post.vote_count} commentCount={post.comment_count} owner={false} />
    </Card>
    </article>
  )
}

export { Post }
