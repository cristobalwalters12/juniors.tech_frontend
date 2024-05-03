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
import { useState } from 'react'

const SavePostForm = ({ id, categoryId = '', category = '', title = '', body = '' }) => {
  const navigate = useNavigate()
  const savePostMutation = useSavePost()
  const query = useGetCategories()
  const [titleHint, setTitleHint] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    watch,
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
  const { onBlur, ...titleRegistry } = register('title')

  const handleBlur = (value) => {
    setTitleHint(false)
    onBlur(value)
  }

  const handleFocus = () => setTitleHint(true)

  const titleLength = watch('title').length
  const contentLength = watch('content')?.text?.trim().length

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-full"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography color="blue-gray" className="-mb-3 text-md font-bold">
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
            <Typography variant="small" color="red" className="font-normal -mt-5">
              {errors.categoryId.message}
            </Typography>
          )}
          <Typography color="blue-gray" className="-mb-3 text-md font-bold">
            Título
          </Typography>
          <div className='flex gap-2 items-center'>
            <Input
              id='title'
              placeholder="Título"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
              labelProps={{
                className: 'hidden'
              }}
              onBlur={handleBlur}
              onFocus={handleFocus}
              {...titleRegistry}
            />
            <span className={`${titleLength < 4 || titleLength > 300 ? 'text-red-500' : ''} w-[3.6rem] text-right text-sm`}>{titleLength}/300</span>
          </div>
          {errors.title && (
            <Typography variant="small" color="red" className="font-normal -mt-5">
              {errors.title.message}
            </Typography>
          )}
          {!errors.title && titleHint && (
            <Typography variant="small" color="blue-gray" className="font-normal -mt-5 form-title-hint">
              El título debe ser único
            </Typography>
          )}
          <Typography color="blue-gray" className="-mb-3 text-md font-bold">
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
          <div className='-mt-5 flex justify-end'>
            {errors.content && (
            <span className="font-normal text-red-500 text-sm inline-block flex-1">
              {errors.content.message}
            </span>
            )}
            <span className={`${contentLength < 4 || contentLength > 10000 ? 'text-red-500' : ''} inline-block text-right text-sm`}>{contentLength}/10.000</span>
          </div>
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
