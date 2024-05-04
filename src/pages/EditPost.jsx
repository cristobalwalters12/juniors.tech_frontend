import { Navigate, useParams } from 'react-router-dom'
import SavePostForm from '../features/posts/SavePostForm'
import { Card, Spinner, Typography } from '@material-tailwind/react'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'
import { useAuthStore } from '../stores/authStore'
import { showErrorToast } from '../shared/utils/showErrorToast'
import { useDocumentTitle } from 'usehooks-ts'
import Rules from '../shared/components/Rules'

const EditPost = () => {
  const { id } = useParams()
  const query = useGetSinglePost(id)
  const currUserId = useAuthStore((state) => state.id)
  useDocumentTitle('Edita tu publicación')

  if (query.isLoading) {
    return (
      <div className='flex justify-center'>
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    )
  }

  if (query.isError) {
    const { error } = query
    showErrorToast(error, 'Error al cargar la publicación')
    return <Navigate to="/not-found" />
  }

  if (query?.data?.authorId !== currUserId) {
    return <Navigate to="/home" />
  }

  const { categoryId, title, body } = query.data

  return (
    <div className='flex'>
      <Card className='p-8 pb-6 max-w-[48rem] flex-1 mb-4 mr-4 bg-accent-light'>
        <Typography variant="h4" color="blue-gray">
          Edita tu publicación
        </Typography>
        <SavePostForm id={id} categoryId={categoryId} title={title} body={body}/>
      </Card>
      <Rules className="self-start dashboard-layout__aside-right" />
    </div>
  )
}

export default EditPost
