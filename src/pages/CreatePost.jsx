import { Typography } from '@material-tailwind/react'
import HolyGrailLayout from '../layouts/SearchLayout'
import SavePostForm from '../features/posts/SavePostForm'

const CreatePost = () => {
  return (
    <HolyGrailLayout>
      <Typography variant="h4" color="blue-gray">
        Crea publicación
      </Typography>
      <SavePostForm />
    </HolyGrailLayout>
  )
}

export default CreatePost
