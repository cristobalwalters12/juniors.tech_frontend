import { useForm, Controller } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useCreatePost } from './useCreatePost'
import { postSchema } from './postSchema'
import {
  Card,
  Input,
  Button,
  Typography
} from '@material-tailwind/react'
import { TextEditor } from './TextEditor'
import { SelectCategories } from './SelectCategories'
import { useEditPost } from './useEditPost'
import { useNavigate } from 'react-router-dom'

const SavePostForm = ({ id, category = '', title = '', body = '' }) => {
  const { createPost } = useCreatePost()
  const { editPost, isEditing } = useEditPost()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onTouched',
    resolver: joiResolver(postSchema),
    defaultValues: { category, title, body }
  })

  const onSubmit = (data) => {
    if (id) {
      editPost({ id, post: data })
    } else {
      createPost(data)
      reset()
    }
    navigate('/')
  }

  return (
    <Card color="transparent" shadow={false}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Categoría
          </Typography>
          <Controller
            name="category"
            defaultValue=""
            control={control}
            render={({ field }) => {
              const { ref, ...rest } = field
              return <SelectCategories id="category" {...rest} label="Categoría"/>
            }}
          />
          {errors.category && (
            <Typography variant="small" color="red" className="font-normal">
              {errors.category.message}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Título
          </Typography>
          <Input
            id="title"
            variant="outlined"
            label="Título"
            {...register('title')}
          />
          {errors.title && (
            <Typography variant="small" color="red" className="font-normal">
              {errors.title.message}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descripción
          </Typography>
          <TextEditor id="body" label="Descripción" register={register} registerKey="body"/>
          {errors.body && (
            <Typography variant="small" color="red" className="font-normal">
              {errors.body.message}
            </Typography>
          )}
          <div className="flex gap-2">
            <Button size="sm" color="red" variant="text" className="rounded-md">
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid || isEditing} size="sm" className="rounded-md">
              Publicar
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}

export default SavePostForm
