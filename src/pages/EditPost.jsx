import { Navigate, useParams } from 'react-router-dom'
import SavePostForm from '../features/posts/SavePostForm'
import HolyGrailLayout from '../layouts/SearchLayout'
import { Typography } from '@material-tailwind/react'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'
import { useAuthStore } from '../stores/authStore'

const EditPost = () => {
  const { id } = useParams()
  const query = useGetSinglePost(id)
  const currUserId = useAuthStore((state) => state.id)
  if (query.isLoading) return <h1>Cargando...</h1>

  if (query.isError) {
    return <Navigate to="/not-found" />
  }

  if (query?.data?.author_id !== currUserId) {
    return <Navigate to="/home" />
  }

  return (
    <HolyGrailLayout>
      <Typography variant="h4" color="blue-gray">
        Edita tu publicación
      </Typography>
      <SavePostForm {...query.data}/>
    </HolyGrailLayout>
  )
}

export default EditPost
