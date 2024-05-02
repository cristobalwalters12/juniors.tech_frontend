import { useForm, Controller } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useSavePost } from './useSavePost'
import { postSchema } from './postSchema'
import {
  Input,
  Button,
  Select,
  Option,
  Typography
} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { useGetCategories } from '../../shared/hooks/useGetCategories'
import ContentEditor from '../../shared/components/TextEditors/ContentEditor'

const SavePostForm = ({ id, categoryId = '', category = '', title = '', body = '' }) => {
  const navigate = useNavigate()
  const savePostMutation = useSavePost()
  const query = useGetCategories()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onTouched',
    resolver: joiResolver(postSchema),
    defaultValues: { categoryId, title, content: { body } }
  })

  const onSubmit = ({ categoryId, title, content: { body } }) => {
    savePostMutation.mutateAsync({ id, categoryId, title, body }).then((post) => {
      reset()
      navigate(`/posts/${post.id}`, { replace: true })
    }).catch(err => {
      showErrorToast(err, 'Error al crear publicación')
    })
  }

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-full"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Categoría
          </Typography>
          {query.isLoading
            ? <Select>
                <Option>{category}</Option>
              </Select>
            : <Controller
                name="categoryId"
                defaultValue={categoryId}
                control={control}
                render={({ field }) => {
                  const { ref, ...rest } = field
                  return (
                    <Select
                      id="categoryId"
                      {...rest}
                      label="Categoría"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'hidden'
                      }}
                      >
                      {query?.data.map(({ id, name }) => <Option key={id} value={id}>{name}</Option>)}
                    </Select>)
                }}
              />
            }
          {errors.categoryId && (
            <Typography variant="small" color="red" className="font-normal">
              {errors.categoryId.message}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Título
          </Typography>
          <Input
            id='title'
            placeholder="Título"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'hidden'
            }}
            {...register('title')}
          />
          {errors.title && (
            <Typography variant="small" color="red" className="font-normal -mt-3">
              {errors.title.message}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contenido
          </Typography>
          <Controller
            name="content"
            defaultValue={{ content: body }}
            control={control}
            render={({ field }) => {
              const { ref, ...rest } = field
              return (
                <ContentEditor
                  id="content"
                  label="Contenido"
                  {...rest}
                  initialValue={body}
                  className="ql-post"
                />
              )
            }}
          />
          {errors.content && (
            <Typography variant="small" color="red" className="font-normal ">
              {errors.content.message}
            </Typography>
          )}
          <div className="flex gap-2">
            <Button onClick={() => navigate(-1)} size="sm" color="red" variant="text" className="rounded-md">
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={!isValid || savePostMutation.isPending}
              loading={savePostMutation.isPending}
              size="sm" className="rounded-md">
              Publicar
            </Button>
          </div>
        </div>
      </form>
  )
}

export default SavePostForm
