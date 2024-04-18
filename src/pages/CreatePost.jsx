import { Card, Typography } from '@material-tailwind/react'
import SavePostForm from '../features/posts/SavePostForm'

const CreatePost = () => {
  return (
    <Card className='p-8 pb-6 mb-4 mr-4 bg-accent-light w-fit'>
      <Typography variant="h4" color="blue-gray">
        Crea publicación
      </Typography>
      <SavePostForm />
    </Card>
  )
}

export default CreatePost
