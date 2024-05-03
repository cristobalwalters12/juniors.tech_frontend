import { Card, Typography } from '@material-tailwind/react'
import SavePostForm from '../features/posts/SavePostForm'
import { useDocumentTitle } from 'usehooks-ts'

const CreatePost = () => {
  useDocumentTitle('Crea una nueva publicación')
  return (
    <Card className='p-8 pb-6 mb-4 mr-4 bg-accent-light max-w-[48rem]'>
      <Typography variant="h4" color="blue-gray">
        Crea publicación
      </Typography>
      <SavePostForm />
    </Card>
  )
}

export default CreatePost
