import { Typography } from '@material-tailwind/react'
import SavePostForm from '../features/posts/SavePostForm'

const CreatePost = () => {
  return (
    <>
      <Typography variant="h4" color="blue-gray">
        Crea publicación
      </Typography>
      <SavePostForm />
    </>
  )
}

export default CreatePost
