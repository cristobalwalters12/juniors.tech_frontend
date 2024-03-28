import { useParams } from 'react-router-dom'
import SavePostForm from '../features/posts/SavePostForm'
import { HolyGrailLayout } from '../layouts/HolyGrailLayout'
import { Typography } from '@material-tailwind/react'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'

const EditPost = () => {
  const { id } = useParams()
  const { isLoading, post, isError } = useGetSinglePost(id)
  if (isLoading || isError) return <h1>Cargando...</h1>
  return (
    <HolyGrailLayout>
      <Typography variant="h4" color="blue-gray">
        Edita tu publicación
      </Typography>
      <SavePostForm {...post}/>
    </HolyGrailLayout>
  )
}

export default EditPost
