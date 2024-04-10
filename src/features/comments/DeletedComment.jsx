import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { DisabledCardFooter } from '../../shared/components/DisabledCardFooter'

const DeletedComment = ({ toggleOpenReplies, comment }) => {
  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        onClick={toggleOpenReplies}
        className={`w-full mt-3 p-3 pb-2 bg-white ${comment.commentCount > 0 ? 'cursor-pointer' : ''}`}
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 flex items-center gap-2"
          >
          <span className='rounded-full bg-blue-gray-300 h-8 w-9'></span>
          <div className="flex w-full flex-row gap-1.5 items-center">
            <Typography variant='small' className='font-bold' color="blue-gray">
              [eliminado]
            </Typography>
            <Typography variant='small' color="blue-gray" className='font-normal'>
              <span className='font-extrabold'> &middot; </span>
              <FormattedDate date={comment.createdAt} />
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-0 p-0 pr-2 ml-11">
          <Typography variant='small' className='font-normal text-gray-600'>
            Comentario eliminado
          </Typography>
        </CardBody>
        <DisabledCardFooter
          commentCount={comment.commentCount}
          className="pl-11"
        />
      </Card>
    </>
  )
}

export default DeletedComment
