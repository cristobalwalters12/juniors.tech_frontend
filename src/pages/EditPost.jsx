import { Navigate, useParams } from 'react-router-dom'
import SavePostForm from '../features/posts/SavePostForm'
import { Card, Spinner, Typography } from '@material-tailwind/react'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'
import { useAuthStore } from '../stores/authStore'
import { showErrorToast } from '../shared/utils/showErrorToast'

const EditPost = () => {
  const { id } = useParams()
  const query = useGetSinglePost(id)
  const currUserId = useAuthStore((state) => state.id)
  if (query.isLoading) {
    return (
  <div className='flex justify-center'>
    <Spinner className="h-16 w-16 text-gray-900/50" />
  </div>)
  }

  if (query.isError) {
    const { error } = query
    showErrorToast(error, 'Error al cargar la publicación')
    return <Navigate to="/not-found" />
  }

  if (query?.data?.authorId !== currUserId) {
    return <Navigate to="/home" />
  }

  return (
    <>
    <Card className='p-8 pb-6 mb-4 mr-4 bg-accent-light w-fit'>
      <Typography variant="h4" color="blue-gray">
        Edita tu publicación
      </Typography>
      <SavePostForm {...query.data}/>
      </Card>
    </>
  )
}

export default EditPost
