import { useForm, Controller } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useSavePost } from './useSavePost'
import { postSchema } from './postSchema'
import {
  Card,
  Input,
  Button,
  Select,
  Option,
  Typography
} from '@material-tailwind/react'
import { TextEditor } from './TextEditor'
import { useNavigate } from 'react-router-dom'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { useGetCategories } from '../../shared/hooks/useGetCategories'

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
    defaultValues: { categoryId, title, body }
  })

  const onSubmit = (data) => {
    savePostMutation.mutateAsync({ id, ...data }).then((post) => {
      reset()
      navigate(`/posts/${post.id}`, { replace: true })
    }).catch(err => {
      showErrorToast(err, 'Error al crear publicación')
    })
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
                      id="categoryId" {...rest}
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
            <Typography variant="small" color="red" className="font-normal">
              {errors.title.message}
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descripción
          </Typography>
          <TextEditor id="body" label="Descripción" register={register} registerKey="body" className="bg-transparent" />
          {errors.body && (
            <Typography variant="small" color="red" className="font-normal">
              {errors.body.message}
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
    </Card>
  )
}

export default SavePostForm
