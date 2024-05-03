import { Card, Typography } from '@material-tailwind/react'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import SavePostForm from '../features/posts/SavePostForm'
import Rules from '../shared/components/Rules'

const CreatePost = () => {
  useDocumentTitle('Crea una nueva publicación')
  return (
    <div className='flex'>
      <Card className='p-8 pb-6 mb-4 mr-4 bg-accent-light flex-1 max-w-[48rem]'>
        <Typography variant="h4" color="blue-gray">
          Crea publicación
        </Typography>
        <SavePostForm />
      </Card>
      <Rules className="self-start dashboard-layout__aside-right" />
    </div>
  )
}

export default CreatePost
